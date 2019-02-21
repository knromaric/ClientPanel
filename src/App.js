import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {Provider} from 'react-redux';
import store from './store';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailsClient from './components/clients/DetailsClient';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/login';
import Settings from './components/settings/Settings';
import {UserIsNotAuthenticated, UserIsAuthenticated} from './helpers/auth';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
                <Route exact path="/client/:id" component={UserIsAuthenticated(DetailsClient)} />
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
                <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />

              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
