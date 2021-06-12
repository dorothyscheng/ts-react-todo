import Routes from './config/Routes';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Routes />
      </Container>
    </div>
  );
}

export default App;
