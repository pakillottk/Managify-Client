import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'

import ThemeStyles from './components/ui/ThemeStyles'
import UIThemeProvider from './components/ui/UIThemeProvider'

import Layout from './components/ui/Layout'
import Segment from './components/ui/segment/Segment'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UIThemeProvider theme={ThemeStyles}>
          <ConnectedRouter history={history}>
            <div>
              <Layout>
                <Segment>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam tincidunt, 
                  pretium metus convallis, fringilla nunc. Morbi non malesuada ante. Integer nulla odio, 
                  interdum et risus maximus, porttitor malesuada augue. Proin ut ex risus. Morbi et urna 
                  ut urna hendrerit malesuada. Praesent auctor risus vitae eros euismod lobortis. Nullam.
                </Segment>
              </Layout>
            </div>
          </ConnectedRouter>
        </UIThemeProvider>
      </Provider>
    );
  }
}

export default App;
