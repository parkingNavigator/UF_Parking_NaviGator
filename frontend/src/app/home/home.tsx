import { Menu, NavigationRounded } from "@mui/icons-material";
import { AppBar, Autocomplete, Box, Chip, Fab, Grid2, IconButton, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";
import campusParkingData from "../../data/parkingData";
import { useState } from "react";

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
    const parkingData = campusParkingData;

    const handleChange = (event: any, newValue: any) => {
        setLocation(newValue);
    }

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
                >
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

export default Home;