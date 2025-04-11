import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Rating,
  TextField,
  Toolbar,
  Typography,
  Select
} from "@mui/material";
import {
  Menu as MenuIcon,
  NavigationRounded,
  LocationOn,
  Language as LanguageIcon,
  ThumbsUpDown as ThumbsUpDownIcon
} from "@mui/icons-material";
import {
  APIProvider,
  InfoWindow,
  Map,
  useMap,
  Marker
} from "@vis.gl/react-google-maps";
import campusParkingData from "../../data/parkingData";
import { getNearestParkingWalkingUsingService } from "../../utils/getNearestParking";
import Grid from "@mui/material/Grid2";
import { PERMIT_TYPES, permitColors, permitText } from "../../data/permitData";
import googlePlaceService from "../../services/googlePlaceService";
import { PlaceData } from "../../types";
import SuggestionsDropDownMenu from "../../components/SuggestonsDropDownMenu";
import parkingPolygons from "../../data/parkingArea";

// (Optional) Additional mapping from permit to color for styling chips.
const permitColorMapping: { [key: string]: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" } = {
  Green: "success",
  Red: "error",
  Brown: "warning"
};

const backgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column"
};

const searchBarStyle = {
  bottom: "1rem",
  left: "1rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
  width: "40vw",
  height: "5vh",
  padding: "1.2rem 1rem 1.2rem 1rem",
  zIndex: 1000,
  position: "absolute",
  borderRadius: "1.7rem"
};

const initialLocation = { lat: 29.646762680098067, lng: -82.35300532101999 };

/**
 * Custom component to render a Google Maps polygon.
 * This component creates a polygon using the google.maps.Polygon API,
 * assigns it to the provided map, and cleans it up on unmount.
 */
function ParkingPolygon({ map, paths, options }: { map: google.maps.Map | null, paths: { lat: number; lng: number }[], options: google.maps.PolygonOptions }) {
  useEffect(() => {
    if (!map || !window.google || !google.maps) return;

    // Create a new google.maps.Polygon with the given options.
    const polygon = new google.maps.Polygon({
      paths,
      ...options,
      map
    });

    // Clean up the polygon when the component unmounts or map/paths/options change.
    return () => {
      polygon.setMap(null);
    };
  }, [map, paths, options]);

  return null;
}

// Example helper: Returns a fill color based on the lot name.
// Modify this function to meet your design (for example, lots for Green permits painted green).
function getColorForParkingLot(name: string): string {
  if (name.toLowerCase().includes("green")) {
    return "#00FF00";
  }
  return "#808080";
}

function Home() {
  // State variables for parking and map interaction.
  const [destination, setDestination] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestParking, setNearestParking] = useState<any>(null);
  const [directions, setDirections] = useState<any>(null);
  const [permitType, setPermitType] = useState<string>("Green");
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<(PlaceData | undefined)[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceData | undefined>(undefined);
  const [location, setLocation] = useState<google.maps.LatLng | null>(null);

  const map = useMap();

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }
    try {
      const suggestCollection = await fetchPlacesFromInput(value);
      setSuggestions(suggestCollection);
    } catch (error) {
      console.error("Autocomplete fetch failed", error);
    }
  };

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    const selected = suggestions[index];
    setSelectedPlace(selected);
    setLocation(
      selected?.location
        ? new google.maps.LatLng(selected.location.lat, selected.location.lng)
        : null
    );
  };

  const traceWalkingRoute = (
    map: google.maps.Map,
    origin: { lat: number; lng: number },
    dest: { lat: number; lng: number }
  ) => {
    if (!map) return;
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(dest.lat, dest.lng),
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        console.log("DirectionsService status:", status);
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error fetching directions", status);
        }
      }
    );
  };

  const handleMapClick = (e: any) => {
    let latLng;
    if (e.latLng) {
      latLng = e.latLng;
    } else if (e.detail && e.detail.latLng) {
      latLng = e.detail.latLng;
    } else if (e.lngLat) {
      latLng = e.lngLat;
    }
    if (!latLng) {
      console.error("No coordinate property found on the event", e);
      return;
    }
    const lat = typeof latLng.lat === "function" ? latLng.lat() : latLng.lat;
    const lng = typeof latLng.lng === "function" ? latLng.lng() : latLng.lng;
    const clickedPoint = { lat, lng };
    setDestination(clickedPoint);

    getNearestParkingWalkingUsingService(clickedPoint, campusParkingData, permitType, (nearest) => {
      setNearestParking(nearest);
      if (map && nearest) {
        traceWalkingRoute(map, nearest.position, clickedPoint);
      }
    });
  };

  return (
    <Box sx={backgroundStyle}>
      {/* App Bar */}
      <AppBar sx={{ p: 2, mb: 3, my: 0, height: "12vh" }} position="static" color="primary">
        <Toolbar variant="dense">
          <IconButton size="medium" color="secondary">
            <MenuIcon />
          </IconButton>
          <Grid container spacing={2} sx={{ flexGrow: 1 }} />
          <Typography variant="h4" color="secondary">
            UF Parking Navigator
          </Typography>
          <Grid container spacing={2} sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      {/* Map */}
      <Box width="100%">
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={location ? location : initialLocation}
          defaultZoom={16}
          onClick={handleMapClick}
        >
          {destination && <Marker position={destination} label="Dest" />}
          {nearestParking && (
            <Marker
              position={nearestParking.position}
              label="Parking"
              icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            />
          )}
          {location && selectedPlace && <LocationDetail {...selectedPlace} />}
          {directions && (
            <InfoWindow position={destination!} pixelOffset={[0, -40]}>
              <Box>
                <Typography variant="subtitle2">Route Found</Typography>
              </Box>
            </InfoWindow>
          )}
          {/* Render parking area polygons */}
          {parkingPolygons.map((lot, index) => (
            <ParkingPolygon
              key={index}
              map={map}
              paths={lot.coordinates}
              options={{
                fillColor: getColorForParkingLot(lot.name),
                strokeColor: getColorForParkingLot(lot.name),
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.35
              }}
            />
          ))}
        </Map>
      </Box>

      {/* Search and Permit Selection Bar */}
      <Paper variant="elevation" elevation={2} sx={searchBarStyle}>
        <Grid container spacing={2} width="100%" display="flex" alignItems="center" justifyContent="flex-start">
          <Grid item xs={8} sx={{ position: "relative" }}>
            <TextField
              value={searchValue}
              onChange={handleSearchChange}
              variant="outlined"
              fullWidth
              placeholder="Search a place"
              size="small"
            />
            {suggestions.length > 0 && (
              <SuggestionsDropDownMenu
                suggestions={suggestions}
                location={location}
                onItemClick={handleItemClick}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            <PermitSelector
              location={location}
              permitType={permitType}
              onSelectPermit={(type: string) => setPermitType(type)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

// Popup detail component
function LocationDetail(selectedPlace: PlaceData) {
  const { name, location, address, rating, websiteURI } = selectedPlace || {};
  if (!location) return null;
  return (
    <>
      <Marker position={location} />
      <InfoWindow position={location} pixelOffset={[0, -40]}>
        <Box display="flex" flexDirection="column" justifyContent="center" gap={2}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
            <LocationOn />
            <Typography variant="subtitle2">{address}</Typography>
          </Box>
          {websiteURI && (
            <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
              <LanguageIcon />
              <a href={websiteURI} target="_blank" rel="noopener noreferrer">
                {websiteURI}
              </a>
            </Box>
          )}
          <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
            <ThumbsUpDownIcon />
            <Rating value={rating ? rating : 0} precision={0.5} readOnly />
          </Box>
        </Box>
      </InfoWindow>
    </>
  );
}

function PermitSelector(props: any) {
  const { permitType } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const open = Boolean(anchorEl);
  const permitTypes = PERMIT_TYPES;
  let color = permitColors[permitType] || "#ffffff";
  const handleSelectPermit = (event: any, type: any) => {
    props.onSelectPermit && props.onSelectPermit(type);
    handleClose();
  };
  const handleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const style = {
    color: "#ffffff",
    backgroundColor: color,
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      color: color
    }
  };
  const renderMenuItem = permitTypes.map((option: any, index: number) => (
    <MenuItem key={index} onClick={(event) => handleSelectPermit(event, option.type)}>
      {option.text}
    </MenuItem>
  ));
  return (
    <>
      <Chip
        sx={style}
        label={hovered ? "Select Permit" : permitText[permitType]}
        variant="outlined"
        clickable
        onClick={handleOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {renderMenuItem}
      </Menu>
    </>
  );
}

const fetchPlacesFromInput = async (
  value: string,
  sessionToken?: google.maps.places.AutocompleteSessionToken | null
): Promise<PlaceData[]> => {
  const request: google.maps.places.AutocompleteRequest = {
    input: value,
    locationBias: { west: -122.44, north: 37.8, east: -122.39, south: 37.78 },
    ...(sessionToken && { sessionToken })
  };
  const suggestions = await googlePlaceService.fetchAutocompleteSuggestions(request);
  const suggestCollection = await Promise.all(
    suggestions.map(async (suggestion) => {
      if (
        suggestion?.placePrediction &&
        typeof suggestion.placePrediction.toPlace === "function"
      ) {
        const placeSuggestion = suggestion.placePrediction.toPlace();
        await placeSuggestion.fetchFields({
          fields: [
            "displayName",
            "formattedAddress",
            "location",
            "adrFormatAddress",
            "photos",
            "rating",
            "websiteURI"
          ]
        });
        return {
          name: placeSuggestion.displayName,
          address: placeSuggestion.formattedAddress,
          location: placeSuggestion.location,
          photos: placeSuggestion.photos,
          rating: placeSuggestion.rating,
          websiteURI: placeSuggestion.websiteURI
        };
      } else {
        return undefined;
      }
    })
  );
  return suggestCollection.filter((suggest): suggest is PlaceData => suggest !== undefined);
};

export default Home;