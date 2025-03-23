import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: "rgba(0, 64, 131, 1)"
        },
        secondary: {
          main: "#ffffff"
        },
      },
      typography: {
        fontFamily: "Arial, sans-serif",
      },    
})

export default theme;