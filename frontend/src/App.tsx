import './App.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes';

function App() {
  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  )
}

const AppRoutes = () => {
  return useRoutes(routes);
};

export default App
