import React, { useRef, useState } from "react";
import {
  AppBar,
  Box,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import {
  Menu as MenuIcon,
  LocationOn,
  Language as LanguageIcon,
} from "@mui/icons-material";
import {
  InfoWindow,
  Map,
  useMap,
  Marker,
  isLatLngLiteral
} from "@vis.gl/react-google-maps";
import campusParkingData from "../../data/parkingData";
import { getNearestParkingWalkingUsingService } from "../../utils/getNearestParking";
import Grid from "@mui/material/Grid2";
import { PERMIT_TYPES, permitColors } from "../../data/permitData";
import googlePlaceService from "../../services/googlePlaceService";
import { PlaceData } from "../../types";
import SuggestionsDropDownMenu from "../../components/SuggestonsDropDownMenu";
import { Switch, FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import ParkingLotInfo from "../../components/ParkingLotInfo";
import { useSnackbar } from "../../hooks/useSnackbar";

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
  width: '50vw',
  height: "5vh",
  padding: "1.2rem 1rem 1.2rem 1rem",
  zIndex: 1000,
  position: "absolute",
  borderRadius: "1.7rem"
};

const initialLocation = { lat: 29.646762680098067, lng: -82.35300532101999 };

function Home() {
  // State variables for parking and map interaction.
  const [destination, setDestination] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestParking, setNearestParking] = useState<any>(null);
  const [permitType, setPermitType] = useState<string>("Green");
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<(PlaceData | undefined)[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceData | undefined>(undefined);
  const [location, setLocation] = useState<google.maps.LatLng | null>(null);
  const [selectingLocation, setSelectingLocation] = useState<boolean>(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [hoveredParkLot, setHoveredParkLot] = useState<number | null>();
  const showSnackbar = useSnackbar();

  const map = useMap();


  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedFetchSuggestions(value);
  };

  const handleItemClick = (index: number) => {
    const selected = suggestions[index];
    setSelectedPlace(selected);
    setSuggestions([]);
    setDetailOpen(true);
    setLocation(
      selected?.location
        ? new google.maps.LatLng(selected.location.lat(), selected.location.lng())
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
        console.log("Result:", result);
        if (status === "OK") {
          showSnackbar('Route Found!', 'success');
        } else {
          console.error("Error fetching directions", status);
        }
      }
    );
  };

  // Debounce search 
  const debouncedFetchSuggestions = useRef(
    debounce(async (value: string) => {
      if (!value.trim()) {
        setSuggestions([]);
        return;
      }
  
      try {
        const suggestions = await fetchPlacesFromInput(value);
        setSuggestions(suggestions);
      } catch (error) {
        console.error("Autocomplete fetch failed", error);
      }
    }, 300)
  ).current;

  const handleSetDestination = () => {
    const loc = selectedPlace?.location;
    if (!loc) return;

    const clickedPoint = {
      lat: loc.lat(),
      lng: loc.lng(),
    };

    setDestination(clickedPoint);
    setDetailOpen(false);
    getNearestParkingWalkingUsingService(clickedPoint, campusParkingData, permitType, (nearest: { position: { lat: number; lng: number; }; }) => {
      setNearestParking(nearest);
      if (map && nearest) {
        traceWalkingRoute(map, nearest.position, clickedPoint);
      }
    })
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
  
      {/* Instruction message */}
      {selectingLocation && (
        <Box
          position="absolute"
          top="15vh"
          left="2rem"
          bgcolor="white"
          color="black"
          p={2}
          borderRadius={2}
          boxShadow={3}
          zIndex={2000}
        >
          <Typography variant="body1">Click on the map to select a destination</Typography>
        </Box>
      )}
  
      {/* Map */}
      <Box width="100%">
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={toLatLngLiteral(location ?? initialLocation)}
          defaultZoom={16}
          onClick={(e: any) => {
            if (!selectingLocation) return;
            let latLng;
            if (e.latLng) latLng = e.latLng;
            else if (e.detail?.latLng) latLng = e.detail.latLng;
            else if (e.lngLat) latLng = e.lngLat;
            if (!latLng) return;
  
            const lat = typeof latLng.lat === "function" ? latLng.lat() : latLng.lat;
            const lng = typeof latLng.lng === "function" ? latLng.lng() : latLng.lng;
            const clickedPoint = { lat, lng };
            setDestination(clickedPoint);

            // Remove location when click on the map
            if (location !== null) setLocation(null);       

            getNearestParkingWalkingUsingService(clickedPoint, campusParkingData, permitType, (nearest: { position: { lat: number; lng: number; }; }) => {
              setNearestParking(nearest);
              if (map && nearest) traceWalkingRoute(map, nearest.position, clickedPoint);
            });
  
          }}
        >
          {campusParkingData
          .filter((lot) =>
            Array.isArray(lot.permits) &&
            lot.permits.some(
              (p) => p.trim().toLowerCase() === permitType.trim().toLowerCase()
            ) &&
            lot.position &&
            typeof lot.position.lat === "number" &&
            typeof lot.position.lng === "number"
          )
          .map((lot, index) => {
            const isRecommended =
              nearestParking && nearestParking.name === lot.name;

            return (
              <React.Fragment key={index}>
                <Marker
                  position={lot.position}
                  icon={
                    isRecommended
                      ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  }
                  onMouseOver={() => setHoveredParkLot(lot.id)}
                  onMouseOut={() => setHoveredParkLot(null)}
                />
                { isRecommended  
                    ? <ParkingLotInfo lot={lot} headerDisabled={false}/>
                    : hoveredParkLot === lot.id 
                      ? <ParkingLotInfo lot={lot} headerDisabled={true}/>
                      : null
                } 
              </React.Fragment>              
            );
          })}
          
          {/* Location marker */}
          <Marker position={location? location : destination}/>
    
          {/* Location detail(searching place feature) */}
          { selectedPlace && 
            <LocationDetail 
              open={detailOpen}
              selectedPlace={selectedPlace}
              onSetDestination={handleSetDestination} 
              onClose={() => setDetailOpen(false)}
            />
          }
        </Map>
      </Box>
  
      {/* Search and Permit Selection Bar */}
      <Paper variant="elevation" elevation={2} sx={searchBarStyle}>
        <Grid container spacing={2} width="100%" display="flex" alignItems="center" justifyContent="flex-start">
          <Grid size={5}>
            <TextField
              value={searchValue}
              onChange={handleSearchChange}
              variant="outlined"
              fullWidth
              placeholder="Search a place"
              size="small"
            />
            {suggestions.length > 0 && 
              <SuggestionsDropDownMenu
                suggestions={suggestions}
                onItemClick={handleItemClick}
              />
            }
          </Grid>
          <Grid size={3}>
            <PermitSelector
              location={location}
              permitType={permitType}
              onSelectPermit={(type: string) => setPermitType(type)}
            />
          </Grid>
          <Grid size={4}>
            <FormControlLabel
              label="Select Location"
              labelPlacement="end"
              control={
                <Switch
                  checked={selectingLocation}
                  onChange={(e) => setSelectingLocation(e.target.checked)}
                  color="primary"
                />
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

// Popup detail component
function LocationDetail(props: {open: Boolean, selectedPlace: PlaceData, onSetDestination: () => void, onClose: () => void}) {
  const { open, selectedPlace, onSetDestination, onClose } = props;
  const { name, location, address, websiteURI } = selectedPlace || {};

  return (
    <React.Fragment>
      { open &&
        <InfoWindow position={location} pixelOffset={[0, -40]} style={{padding: '0px'}} onCloseClick={onClose}>
          <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
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
            <Box display="flex" justifyContent="flex-start" alignItems="center" paddingLeft={1}>
              <Button color="primary" size="small" variant="contained" fullWidth onClick={onSetDestination}>
                Set as Destination
              </Button>
            </Box>
          </Box>
        </InfoWindow>
      }
    </React.Fragment>
  )
}

function PermitSelector(props: any) {
  const { permitType } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const open = Boolean(anchorEl);
  const permitTypes = PERMIT_TYPES;
  let color = permitColors[permitType] || "#ffffff";

  const handleSelectPermit = (type: any) => {
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
    <MenuItem key={index} onClick={() => handleSelectPermit(option.type)}>
      {option.text}
    </MenuItem>
  ));

  return (
    <>
      <Chip
        sx={style}
        label={hovered ? "Select Permit" : permitType}
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

    // Construct search request
    const request: google.maps.places.AutocompleteRequest = {
      input: value,
      locationBias: new google.maps.LatLngBounds(
        new google.maps.LatLng(29.626, -82.373),
        new google.maps.LatLng(29.653, -82.338)
      ),
      ...(sessionToken instanceof google.maps.places.AutocompleteSessionToken && {
        sessionToken,
      }),
    };
   
    const suggestions = await googlePlaceService.fetchAutocompleteSuggestions(request);

    // Collect and fetch required fields of all suggested places
    const suggestCollection = await Promise.all(suggestions.map(async(suggestion) => {
        if (suggestion?.placePrediction && typeof suggestion.placePrediction.toPlace === "function") {
            const placeSuggestion = suggestion.placePrediction.toPlace();
            await placeSuggestion.fetchFields({
                fields: ["displayName", "formattedAddress", "location", "adrFormatAddress",
                          "websiteURI"],
            });

            return {
                name: placeSuggestion.displayName,
                address: placeSuggestion.formattedAddress,
                location: placeSuggestion.location,
                websiteURI: placeSuggestion.websiteURI
            }
            
        } else {
            return undefined;
        }
    }));

    return (
        suggestCollection
        .filter((suggest): suggest is PlaceData => suggest !== undefined)
        .filter((suggest) => suggest.location !== null)
        .filter((suggest) => {
            const lat = suggest.location?.lat();
            const lng = suggest.location?.lng();
            if (lat !== undefined && lng !== undefined)
                if (lng <= -82.338 && lng >= -82.373 && lat <= 29.653 && lat >= 29.626)
                    return suggest;
        })
    );
}

const debounce = (callback: Function , delay: number) => {

    let timeoutId: string | number | NodeJS.Timeout | undefined;

    return (...args: any[]) => {
        
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

function toLatLngLiteral(pos: google.maps.LatLng | google.maps.LatLngLiteral): google.maps.LatLngLiteral {
  if (!isLatLngLiteral(pos)) {
    return {
      lat: pos.lat(),
      lng: pos.lng(),
    };
  }
  return pos;
}


export default Home;