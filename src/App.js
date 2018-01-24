import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            Redux working!
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
