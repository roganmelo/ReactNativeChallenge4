import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const prefix = '@CART/';

// Types and Creators
export const { Types, Creators } = createActions({
  updateCart: ['cart'],
  removeItem: ['id'],
  changeAmount: ['id', 'amount']
}, { prefix });

// Reducer
const INITIAL_STATE = Immutable({
  items: [],
  subtotal: 0
});

const HANDLERS = {
  [Types.UPDATE_CART]: (state, { cart }) => Immutable({ ...state, ...cart }),
  [Types.REMOVE_ITEM]: (state, { id }) => {
    const items = state.items.filter(item => item.id !== id);

    return Immutable({
      ...state,
      items,
      subtotal: items.reduce((prev, curr) => (curr.amount * curr.price) + prev, 0)
    });
  }
};

export default createReducer(INITIAL_STATE, HANDLERS);
