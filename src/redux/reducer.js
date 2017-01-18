import { combineReducers } from 'redux-immutablejs';
import menuDrawerReducer from '../modules/MenuDrawer/MenuDrawerState';
import authReducer from '../modules/Auth/AuthState';
import { restReducer } from '../services/rest';
import routerReducer from '../services/router';
import { intlReducer } from 'react-intl-redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // Menu drawer state
  drawer: menuDrawerReducer,

  // Routing state
  routing: routerReducer,

  // REST API
  rest: restReducer,

  // Internationalization state (TODO!)
  intl: intlReducer,

  // Authentication
  auth: authReducer,

  // Redux Form
  form: formReducer,
}

export default combineReducers(reducers);
