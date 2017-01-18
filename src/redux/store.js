import { createStore, compose, applyMiddleware } from 'redux';
import { install } from 'redux-loop';
import { Map } from 'immutable';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router'

export default function configureStore(initialState = Map()) {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(browserHistory)),
    install(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
