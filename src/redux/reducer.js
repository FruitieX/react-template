import { combineReducers } from 'redux';
import menuDrawerReducer from '../modules/MenuDrawer/MenuDrawerState';
import rest from '../services/rest';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux'

const reducers = {
  // Menu drawer state
  drawer: menuDrawerReducer,

  // Routing state
  routing: routerReducer,

  // Internationalization state (TODO!)
  intl: intlReducer,

  // REST API
  ...rest.reducers,
}

export default combineReducers(reducers);
