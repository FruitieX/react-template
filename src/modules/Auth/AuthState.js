import {Map, fromJS} from 'immutable';

import {
  createAction,
  createReducer
} from 'redux-act';

// Action creators
export const loginSuccess = createAction('Log in successful');
export const loginError = createAction('Log in error');
export const logout = createAction('Log out');

// Initial state
const initialState = Map({
  isLoggedIn: false,
  currentUser: null,
  authenticationToken: null
});

export default createReducer({
  [loginSuccess]: (state, action) => state
    .set('isLoggedIn', true)
    .set('currentUser', action.payload.profile)
    .set('authenticationToken', action.payload.token),
  [loginError]: (state, action) => initialState,
  [logout]: (state, action) => initialState
}, initialState);
