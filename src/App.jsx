import { Header, Content, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <h1>Titulo</h1>
        <p>Texto texto texto</p>
      </Content>
      <Footer creator="Hélen Andrade" />
    </>
  )
};

export { App };
