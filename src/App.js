import React, { Component } from 'react';

import './App.css'

import { applyMiddleware, createStore } from 'redux'
import counterReducer from './reducer'
import { Provider } from 'react-redux'


import Counter from './Counter'
import Header from './Header';
import DisplayCounter from './DisplayCounter';

import logger from 'redux-logger'

//store usando logger
let store = createStore(counterReducer,
  applyMiddleware(logger)
)

//store usando devtools
/*
  let store = createStore(counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header title='Contador React/Redux' />
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
