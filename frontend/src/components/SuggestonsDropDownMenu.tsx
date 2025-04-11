import { LocationOn } from "@mui/icons-material"
import { Paper, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider } from "@mui/material"
import { PlaceData } from "../types"

interface Props {
    suggestions: (PlaceData | undefined)[];
    location: google.maps.LatLng | null | undefined;
    onItemClick: (event: React.MouseEvent<HTMLDivElement>, index: number) => void;
}

/**
 * Suggestions drop-down menu for place searching
 * @param props 
 * @returns 
 */
function SuggestionsDropDownMenu (props: Props) {
    const { suggestions, location, onItemClick } = props;

    return (
        <Paper
            style={{
                position: "absolute",
                bottom: "105%", // position above the TextField
                left: 0,
                right: 0,
                zIndex: 10,
            }}
        >
            <List dense sx={{paddingY: '0px'}}>
            {suggestions.map((suggestion, index: number) => {
                return (
                    <>
                    <ListItemButton
                        selected={suggestion?.location === location}
                        onClick={(event) => onItemClick(event, index)}
                        key={index}
                    >
                    <ListItemIcon>
                        <LocationOn/>
                    </ListItemIcon>
                    <ListItemText primary={
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>{suggestion?.name}</Typography>
                            <Typography variant="caption" noWrap>{suggestion?.address}</Typography>
                        </Box>} />
                    </ListItemButton>
                    <Divider/>
                    </>
                )
            })}
            </List>
        </Paper>
    )
}

export default SuggestionsDropDownMenu;