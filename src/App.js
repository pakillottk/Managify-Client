import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'

/* 
  TO DELETE: dummy code  
*/

import ApiConnection from './ApiConnection'
import AuthTokenRouter from './communication/routers/AuthTokenRouter'
import { authPaths, apiConnection } from './env'

console.log( ApiConnection )
const authRouter = new AuthTokenRouter( ApiConnection, authPaths )
console.log( authRouter );

(async () => {
  try {
    await authRouter.attemptLogin( { username:'root', password:'root' } )
    console.log( 'Login okey' )
    
    console.log( ApiConnection.headers.headers )
    
    await authRouter.logout()

    console.log( ApiConnection.headers.headers )
    console.log( 'Logout okey' )
  } catch( exception ) {
    console.log( 'Login failed' )
    console.log( exception )
  }
})()

/* ====== */

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
