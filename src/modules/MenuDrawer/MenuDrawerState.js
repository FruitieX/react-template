import { Map } from 'immutable';
import {
  createAction,
  createReducer
} from 'redux-act';

// Action creators
export const closeDrawer = createAction('Close menu drawer');
export const openDrawer = createAction('Open menu drawer');
export const toggleDrawer = createAction('Toggle menu drawer');

// Initial state
const initialState = Map({
  drawerOpened: false
});

// Reducer
export default createReducer({
  [closeDrawer]: (state) => state.set('drawerOpened', false),
  [openDrawer]: (state) => state.set('drawerOpened', true),
  [toggleDrawer]: (state) => state.set('drawerOpened', !state.get('drawerOpened'))
}, initialState);
