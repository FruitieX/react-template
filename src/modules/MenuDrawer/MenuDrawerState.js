import {
  createAction,
  createReducer
} from 'redux-act';

// Action creators
export const closeDrawer = createAction('Close menu drawer');
export const openDrawer = createAction('Open menu drawer');
export const toggleDrawer = createAction('Toggle menu drawer');

// Initial state
const initialState = {
  drawerOpened: false
};

// Reducer
export default createReducer({
  [closeDrawer]: (state) => ({
    ...state,
    drawerOpened: false
  }),
  [openDrawer]: (state) => ({
    ...state,
    drawerOpened: true
  }),
  [toggleDrawer]: (state) => ({
    ...state,
    drawerOpened: !state.drawerOpened
  })
}, initialState);
