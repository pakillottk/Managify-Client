import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import { AttemptLogin } from './LoginGuard'

import Layout from './components/Layout'
import LoginForm from './components/LoginForm/LoginForm'
import Dashboard from './components/Dashboard/Dashboard'

AttemptLogin(store, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <Layout history={history}>
              <div> 
                <Route exact path="/" component={LoginForm} />
                <Route path="/dashboard" component={Dashboard} /> 
              </div>
            </Layout>
          </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
