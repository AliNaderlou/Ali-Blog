import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Client';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/itsme" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
