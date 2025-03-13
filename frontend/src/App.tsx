import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes';

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

const AppRoutes = () => {
  return useRoutes(routes);
};

export default App
