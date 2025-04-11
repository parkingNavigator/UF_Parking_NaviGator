import React, { useEffect, useRef, useState } from "react";
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
  useMapsLibrary,
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

// (Optional) Additional mapping from permit to color from HEAD (if you want to use it for Chip styling)
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
  width: "40vw", // from incoming branch
  height: "5vh",
  padding: "1.2rem 1rem 1.2rem 1rem",
  zIndex: 1000,
  position: "absolute",
  borderRadius: "1.7rem" // HEAD uses 1.7rem vs incoming 1.5rem; using 1.7rem here
};

const initialLocation = { lat: 29.646762680098067, lng: -82.35300532101999 };

function Home() {
  // State variables for campus parking and map click (HEAD functionality)
  const [destination, setDestination] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestParking, setNearestParking] = useState<any>(null);
  const [directions, setDirections] = useState<any>(null);
  // State for permit type (both branches)
  const [permitType, setPermitType] = useState<string>("Green");
  // For search suggestions (incoming branch)
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<(PlaceData | undefined)[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceData | undefined>(undefined);
  // Also reuse location state (for search selection) from incoming branch
  const [location, setLocation] = useState<google.maps.LatLng | null>(null);

  const map = useMap();

  // ---------------------------
  // Incoming Branch: Search Functionality
  // ---------------------------

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

  // ---------------------------
  // HEAD Functionality: Map Click and Route Tracing using campusParkingData
  // ---------------------------
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
    console.log("Map click event:", e);
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

    // Use campusParkingData to get nearest parking for the selected permitType.
    getNearestParkingWalkingUsingService(clickedPoint, campusParkingData, permitType, (nearest) => {
      setNearestParking(nearest);
      console.log("Nearest parking location based on walking distance:", nearest);
      if (map && nearest) {
        traceWalkingRoute(map, nearest.position, clickedPoint);
      }
    });
  };

  return (
    <Box sx={backgroundStyle}>
      {/* App Bar */}
      <AppBar sx={{ p: 2, marginBottom: 3, marginY: 0, height: "12vh" }} position="static" color="primary">
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
          onLoad={(mapInstance) => {
            // Map instance is available via the useMap hook already.
          }}
        >
          {/* Display marker for destination from map click */}
          {destination && <Marker position={destination} label="Dest" />}
          {/* Display marker for nearest parking (calculated from campusParkingData) */}
          {nearestParking && (
            <Marker
              position={nearestParking.position}
              label="Parking"
              icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            />
          )}
          {/* If a place has been selected from search suggestions, display the detailed popup */}
          {location && selectedPlace && <LocationDetail {...selectedPlace} />}
          {/* Optionally, display an InfoWindow to indicate directions found */}
          {directions && (
            <InfoWindow position={destination!} pixelOffset={[0, -40]}>
              <Box>
                <Typography variant="subtitle2">Route Found</Typography>
              </Box>
            </InfoWindow>
          )}
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
              <SuggestionsDropDownMenu suggestions={suggestions} location={location} onItemClick={handleItemClick} />
            )}
          </Grid>
          <Grid item xs={4}>
            {/* Permit select button from incoming branch */}
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

// Popup detail component (from incoming branch)
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

// Permit select button component (from incoming branch)
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

// Fetch predictions based on input value (from incoming branch)
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