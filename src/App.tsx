import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/todos' component={ TodosContainer } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
