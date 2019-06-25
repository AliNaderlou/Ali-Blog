import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Client';
import Login from './Login';
import withAuth from './withAuth';
import Admin from './Admin'
import EditWorkSample from './EditWorkSample'
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
          <Route path="/admin" component={withAuth(Admin)} />
          <Route path="/edit/worksample/:id" component={withAuth(EditWorkSample)} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
