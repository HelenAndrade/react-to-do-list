import { Header, Content, Footer } from './components';
import { Home } from './pages';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer creator="Hélen Andrade" />
    </>
  )
};

export { App };
