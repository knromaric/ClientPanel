import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {Provider} from 'react-redux';
import store from './store';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailsClient from './components/clients/DetailsClient';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/:id" component={DetailsClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
