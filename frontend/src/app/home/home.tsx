import { Menu, NavigationRounded } from "@mui/icons-material";
import { AppBar, Autocomplete, Box, Chip, Fab, Grid2, IconButton, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";
import campusParkingData from "../../data/parkingData";
import { useState } from "react";
import { getNearestParkingWalkingUsingService } from "../../utils/getNearestParking";

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
}

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
}

const initialLocation = {lat: 29.646762680098067, lng: -82.35300532101999};

function Home () {
    const [location, setLocation] = useState();
    const [destination, setDestination] = useState<any>(null); // user clicks on map
    const [nearestParking, setNearestParking] = useState<any>(null);
    const currentPermit = "Green";

    const parkingData = campusParkingData;

    const handleChange = (event: any, newValue: any) => {
        setLocation(newValue);
    }

    // When the user clicks the map, store that point as the destination,
    // then compute the nearest parking.
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

        getNearestParkingWalkingUsingService(clickedPoint, parkingData, currentPermit, (nearest) => {
            setNearestParking(nearest);
            console.log("Nearest parking location based on walking distance:", nearest);
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
                    defaultCenter={location? location : initialLocation}
                    defaultZoom={16}
                    onClick={handleMapClick}  

                >
                    {/* Optionally, render markers for destination, parking, etc. */}
                    {destination && <Marker position={destination} label="Dest" />}
                    {nearestParking && (
                        <Marker
                        position={nearestParking.position}
                        label="Parking"
                        icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        />
                    )}
                    {/* show selected location deatil */}
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
                <Chip label="Green" color="success"/>
            </Paper>
    </Box>
    ) 
}

const renderLocationDetail = (location: any) => {
    const { name, permitHours, position, permit, hasCharging } = location;

    return (
        <>
            <Marker position={position} />
            <InfoWindow 
                position={position}
                pixelOffset={[0,-40]}  // move up 40px
                
            >
              <div>
                <h3>{name}</h3>
                <ul style={{textAlign: "left"}}>
                    <li>{`Permit type: ${permit}`}</li>
                    <li>{`Permit hours: ${permitHours}`}</li>
                    <li>{`Charging: ${hasCharging? 'Yes' : 'No'}`} </li>
                </ul>
              </div>
            </InfoWindow>
          </>
       
    )
}

// Simple Haversine formula or squared-distance approach
// to find nearest parking by "straight line" distance.
function getNearestParking(destination: { lat: number; lng: number }, spots: any[]) {
    if (!destination || !spots.length) return null;
  
    let minDistance = Infinity;
    let nearest = null;
  
    for (const spot of spots) {
      const d = distanceBetween(
        destination.lat,
        destination.lng,
        spot.position.lat,
        spot.position.lng
      );
      if (d < minDistance) {
        minDistance = d;
        nearest = spot;
      }
    }
    return nearest;
  }
  
  // Basic helper: approximate distance in meters using the Haversine formula
  function distanceBetween(lat1: number, lng1: number, lat2: number, lng2: number) {
    const R = 6371e3; // Earth radius in meters
    const toRad = (x: number) => (x * Math.PI) / 180;
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lng2 - lng1);
  
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) *
        Math.cos(φ2) *
        Math.sin(Δλ / 2) *
        Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // in meters
  }



export default Home;