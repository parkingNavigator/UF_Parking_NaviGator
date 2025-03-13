import { Menu } from "@mui/icons-material";
import { AppBar, Box, Grid2, IconButton, Toolbar, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/background.jpg";


function Home () {

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: 'column',
                gap: '3rem'
            }}
            >
            <AppBar sx={{ bgcolor: "rgba(255, 255, 255, 0.7)", p: 3, borderRadius: 1, marginBottom: 3 }} position="static">
                <Toolbar variant="dense">
                    <IconButton size="medium">
                        <Menu/>
                    </IconButton>
                    <Grid2 marginX={2}/>
                    <Typography variant="h4" color="secondary">Parking Navigator</Typography>
                    <Grid2/>
                </Toolbar>
            </AppBar>
    </Box>
    ) 
}

export default Home;