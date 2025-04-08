import { AppBar, Box, Chip, Divider, IconButton, Menu, MenuItem, Paper, Rating, TextField, Toolbar, Typography } from "@mui/material";
import { InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import { PERMIT_TYPES, permitColors, permitText } from "../../data/permitData";
import React from "react";
import {LocationOn} from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import googlePlaceService from "../../services/googlePlaceService";
import { PlaceData } from "../../types";
import SuggestionsDropDownMenu from "../../components/SuggestonsDropDownMenu";


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
    width: '40vw',
    height: '5vh',
    padding: '1.2rem 1rem 1.2rem 1rem',
    zIndex: 1000,
    position: 'absolute',
    borderRadius: '1.5rem'
}

const initialLocation = {lat: 29.646762680098067, lng: -82.35300532101999};


function Home () {
    const [location, setLocation] = useState<google.maps.LatLng | null | undefined>();
    const [permitType, setPermitType] = useState<string>('green');
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState<(PlaceData | undefined)[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<(PlaceData | undefined)>();

    const suggestionRef = useRef<google.maps.places.AutocompleteSuggestion | null>(null);
    const sessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null);

    useEffect(() => {
        const init = async () => {
            suggestionRef.current = new google.maps.places.AutocompleteSuggestion();
            sessionTokenRef.current = new google.maps.places.AutocompleteSessionToken();
        }

        init();
    }, []);


    // Handle change from search field
    const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value); 

        if (value.length === 0) {
            setSuggestions([]);
            return;
        }
      
        try {
            // Fetch predications based on input value
            const suggestCollection = await fetchPlacesFromInput(value, sessionTokenRef.current);
            setSuggestions(suggestCollection);
            
        } catch (error){
            console.error("Autocomplete fetch failed", error);
        }
    };

    // Handle select permit type
    const handleSetPermit = (type: string) => setPermitType(type);

    // Handle select place from suggestions
    const handleItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
      ) => {
        const selectedPlace = suggestions[index];
        setSelectedPlace(selectedPlace);
        setLocation(selectedPlace?.location);
    };


    return (
        <Box sx={backgroundStyle}>

            {/* App Bar */}
            <AppBar sx={{p: 2, marginBottom: 3, marginY: 0, height: '12vh'}} position="static" color="primary">
                <Toolbar variant="dense">
                    <IconButton size="medium" color="secondary">
                        <MenuIcon/>
                    </IconButton>
                    <Grid marginX={2}/>
                    <Typography variant="h4" color="secondary">UF Parking Navigator</Typography>
                    <Grid/>
                </Toolbar>
            </AppBar>

            {/* Map */}
            <Box width="100%">
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={initialLocation}
                    center={location && location}
                    defaultZoom={16}
                >
                    {/* Popup detail of selected location */}
                    {location && selectedPlace && <LocationDetail {...selectedPlace}/>}
                </Map>
            </Box>

            {/* Search Bar */}
            <Paper variant="elevation" elevation={2} sx={searchBarStyle}>
                <Grid container spacing={2} width="100%" display="flex" alignItems="center" justifyContent="flex-start">
                    <Grid size={8} sx={{position: "relative" }}>

                        {/* Search field */}
                        <TextField value={searchValue} onChange={handleSearchChange} variant="outlined" fullWidth
                                placeholder="Search a place" size="small"/>
                        
                        {/* Suggestions drop-down menu */}
                        { suggestions.length > 0 && 
                            <SuggestionsDropDownMenu suggestions={suggestions} location={location} onItemClick={handleItemClick}/>
                        }

                    </Grid>
                    <Grid size={4} justifyContent="flex-start">

                        {/* Permit select button */}
                        <PermitSelector location={location} permitType={permitType} onSelectPermit={handleSetPermit}/>

                    </Grid>
                </Grid>
            </Paper>
    </Box>
    ) 
}


// Popup detail component
function LocationDetail (selectedPlace: PlaceData | undefined) {
    const { name, location, address, rating, websiteURI } = selectedPlace || {};
   
    return (
        <>
            <Marker position={location} />
            <InfoWindow 
                position={location}
                pixelOffset={[0,-40]}
            >
                <Box display="flex" flexDirection="column" justifyContent="center" gap={2}>
                    
                    {/* Location name */}
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>{name}</Typography>
                    </Box>
                    <Divider/>

                    {/* Address */}
                    <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
                        <LocationOn/>
                        <Typography variant="subtitle2">{address}</Typography>
                    </Box>

                    {/* Website URI (if exist) */}
                    { websiteURI &&
                        <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
                            <LanguageIcon/>
                            <a href={websiteURI} target="_blank">{`${websiteURI}`}</a>
                        </Box>
                    }

                    {/* Rating */}
                    <Box display="flex" justifyContent="flex-start" alignItems="center" gap={2}>
                        <ThumbsUpDownIcon/>
                        <Rating value={rating? rating : 0} precision={0.5} readOnly/>
                    </Box>
                </Box> 
            </InfoWindow>
        </>
       
    )
}

// Permit select button
function PermitSelector(props: any){
    const { permitType } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [hovered, setHovered] = useState(false);
    const open = Boolean(anchorEl);

    const permitTypes = PERMIT_TYPES;
    let color = permitColors[permitType] || '#ffffff';

    const handleSelectPermit = (event: any, type: any) => {
        props.onSelectPermit && props.onSelectPermit(type);
        handleClose();
    }

    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const style = {
        color: '#ffffff',
        backgroundColor: color,
        width: '100%',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            color: color
        }
    }

    const renderMenuItem = permitTypes.map((option, index) => {
        return (
            <MenuItem 
                key={index}
                onClick={(event) => handleSelectPermit(event, option.type)}
            >
                {option.text}
            </MenuItem>
        )
    })

    return (
        <>
            <Chip 
                sx={style} 
                label={hovered? 'Select Permit' : permitText[permitType]} 
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
        
    )
}

// Fetch predications based on input value
const fetchPlacesFromInput = async (
        value: string,
        sessionToken?: google.maps.places.AutocompleteSessionToken | null
    ): Promise<PlaceData[]> => {

    // Construct search request
    const request: google.maps.places.AutocompleteRequest = {
      input: value,
      locationBias: {
        west: -122.44,
        north: 37.8,
        east: -122.39,
        south: 37.78,
      },
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
                            "photos", "rating", "websiteURI"],
            });

            return {
                name: placeSuggestion.displayName,
                address: placeSuggestion.formattedAddress,
                location: placeSuggestion.location,
                photos: placeSuggestion.photos,
                rating: placeSuggestion.rating,
                websiteURI: placeSuggestion.websiteURI
            }
            
        } else {
            return undefined;
        }
    }))

    return suggestCollection.filter((suggest): suggest is PlaceData => suggest !== undefined);
}


export default Home;