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
import EntityRouter from './communication/routers/EntityRouter'
import Company from './data/entities/Company'
import Query from './data/queries/Query'

const companyEntity   = new Company(); 
const companiesRouter = new EntityRouter( companyEntity, ApiConnection );

const dummyQuery = new Query( 
  [ 'a', 'b', 'c' ],
  [ 'd' ], 
  [ { field: 'a', operator: '=', value: 'x' }, { field: 'b', operator: '<>', value: 'y' } ],
  [],
  [{ relation: 'm' }],
  [ {field: 'a', sorting: 'desc'} ]
)
console.log( dummyQuery.toString() )

console.log( ApiConnection )
console.log( companyEntity )
console.log( companiesRouter )

console.log( companiesRouter.get( dummyQuery ) )
console.log( companiesRouter.create( {} ) )
console.log( companiesRouter.update( 1, {} ) )
console.log( companiesRouter.delete( 1 ) )

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
