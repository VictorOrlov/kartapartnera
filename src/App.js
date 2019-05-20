import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
