import { Header, Content, Footer } from './components';
import { Home } from './pages';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

export { App };
