import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const prefix = '@DETAILS/';

// Types and Creators
export const { Types, Creators } = createActions({
  addToCart: ['product']
}, { prefix });

// Reducer
const INITIAL_STATE = Immutable({});

const HANDLERS = {};

export default createReducer(INITIAL_STATE, HANDLERS);
