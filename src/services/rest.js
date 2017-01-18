import "isomorphic-fetch";
import reduxApi, { transformers } from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
import { createReducer } from 'redux-immutablejs'
import { fromJS, toJS, Iterable } from 'immutable';
import config from 'config';

// Endpoint configurations
const rest = reduxApi({
  lectures: {
    url: `${config.API_ROOT}/lectures`,
    transformer: transformers.array
  },
  experts: {
    url: `${config.API_ROOT}/experts`,
    transformer: transformers.array
  }
}).use("fetch", adapterFetch(fetch));

export default rest;

export const restReducer = (state = fromJS({}), action) => {
  // TODO: this has a pretty bad performance penalty
  state = state.toJS();

  Object.keys(rest.reducers).forEach((key) => {
    const oldState = state[key];
    const newState = rest.reducers[key](oldState, action);
    state[key] = newState;
  });

  return fromJS(state);
};
