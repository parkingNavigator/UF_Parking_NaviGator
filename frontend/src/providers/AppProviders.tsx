import { SnackbarProvider } from "./SnackbarProvider";
import { APIProvider } from '@vis.gl/react-google-maps';
import { ThemeProvider } from '@mui/material'
import theme from '../theme';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <ThemeProvider theme={theme}>
            <APIProvider apiKey={apiKey} libraries={['places']}>
                <SnackbarProvider>
                    {children}
                </SnackbarProvider>
            </APIProvider>
        </ThemeProvider>
    );
};