import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes';
import { APIProvider } from '@vis.gl/react-google-maps';

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </APIProvider>
  )
}

const AppRoutes = () => {
  return useRoutes(routes);
};

export default App
