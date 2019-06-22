import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Client from './Client';
import Admin from './Admin';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/itsme" component={Admin} />
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
