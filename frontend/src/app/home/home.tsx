import { Menu, NavigationRounded } from "@mui/icons-material";
import { AppBar, Autocomplete, Box, Chip, Grid2, IconButton, Paper, TextField, Toolbar, Typography, Select, MenuItem  } from "@mui/material";
import { APIProvider, InfoWindow, Map,useMapsLibrary,useMap, Marker } from "@vis.gl/react-google-maps";
import campusParkingData from "../../data/parkingData";
import { useState } from "react";
import { getNearestParkingWalkingUsingService } from "../../utils/getNearestParking";

const permitColorMapping: { [key: string]: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" } = {
    "Green": "success",
    "Red": "error",
    "Brown": "warning"
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
    flexDirection: 'column',
};

const searchBarStyle = {
    bottom: '1rem', 
    left: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    width: '35vw',
    height: '5vh',
    padding: '1.5rem 1rem 1.5rem 1rem',
    zIndex: 1000,
    position: 'absolute',
    borderRadius: '1.7rem'
};

const initialLocation = {lat: 29.646762680098067, lng: -82.35300532101999};

function Home () {
    const [location, setLocation] = useState();
    const [destination, setDestination] = useState<any>(null); // user clicks on map
    const [nearestParking, setNearestParking] = useState<any>(null);
    const [directions, setDirections] = useState(null);
    const [permitType, setPermitType] = useState("Green");
    const parkingData = campusParkingData;
    const map = useMap();
    const handleChange = (event: any, newValue: any) => {
        setLocation(newValue);
    };

    // Function to trace a walking route from start (origin) to dest on the map.
    const traceWalkingRoute = (map, origin, dest) => {
        if (!map) return;
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
          {
            origin: new google.maps.LatLng(origin.lat, origin.lng), // or simply origin if it's already in correct format
            destination: new google.maps.LatLng(dest.lat, dest.lng),
            travelMode: google.maps.TravelMode.WALKING,
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

    // When the user clicks the map, store that point as the destination,
    // compute the nearest parking, and trace the walking route.
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

        // Get nearest parking filtered by the current permit type.
        getNearestParkingWalkingUsingService(clickedPoint, parkingData, permitType, (nearest) => {
            setNearestParking(nearest);
            console.log("Nearest parking location based on walking distance:", nearest);
            // If we have the map instance and a nearest spot, trace the route.
            if (map && nearest) {
                traceWalkingRoute(map, nearest.position, clickedPoint);
            }
        });
    };

    return (
        <Box sx={backgroundStyle}>
            <AppBar sx={{p: 2, marginBottom: 3, marginY: 0, height: '12vh' }} position="static" color="primary">
                <Toolbar variant="dense">
                    <IconButton size="medium" color="secondary">
                        <Menu/>
                    </IconButton>
                    <Grid2 marginX={2}/>
                    <Typography variant="h4" color="secondary">UF Parking Navigator</Typography>
                    <Grid2/>
                </Toolbar>
            </AppBar>
            <Box width="100%">
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={location ? location : initialLocation}
                    defaultZoom={16}
                    onClick={handleMapClick}
                    // Capture the map instance when the map loads
                    onLoad={(map) => setMapInstance(map)}
                >
                    {destination && <Marker position={destination} label="Dest" />}
                    {nearestParking && (
                        <Marker
                        position={nearestParking.position}
                        label="Parking"
                        icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        />
                    )}
                    {location && renderLocationDetail(location)}
                </Map>
            </Box>
            <Paper variant="elevation" elevation={2} sx={searchBarStyle}>
                <NavigationRounded sx={{ mr: 1 }} />
                <Autocomplete
                    freeSolo
                    fullWidth
                    disableClearable
                    disableCloseOnSelect
                    options={parkingData}
                    getOptionLabel={(option) =>
                        typeof option === "string" ? option : option.name
                    }
                    onChange={handleChange}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Location"
                        variant="outlined"
                        size="small"
                        fullWidth
                        slotProps={{
                        input: {
                            ...params.InputProps,
                            type: 'search',
                        },
                        }}
                    />
                    )}
                />
                <Chip
                    label={permitType}
                    color={permitColorMapping[permitType] || "default"}
                    sx={{ mr: 2 }}
                />
                <Select
                    value={permitType}
                    onChange={(e) => setPermitType(e.target.value)}
                    size="small"
                    sx={{ mr: 2 }}
                >
                    <MenuItem value="Green">Green</MenuItem>
                    <MenuItem value="Red">Red</MenuItem>
                    <MenuItem value="Brown">Brown</MenuItem>
                </Select>
            </Paper>
        </Box>
    );
}

const renderLocationDetail = (location: any) => {
    const { name, permitHours, position, permit, hasCharging } = location;
    return (
        <>
            <Marker position={position} />
            <InfoWindow 
                position={position}
                pixelOffset={[0,-40]} 
            >
              <div>
                <h3>{name}</h3>
                <ul style={{textAlign: "left"}}>
                    <li>{`Permit type: ${permit}`}</li>
                    <li>{`Permit hours: ${permitHours}`}</li>
                    <li>{`Charging: ${hasCharging ? 'Yes' : 'No'}`}</li>
                </ul>
              </div>
            </InfoWindow>
        </>
    );
};

export default Home;