import { createLogic } from 'redux-logic';
import { Types as DetailsTypes } from 'pages/Details/ducks';

import { Types, Creators } from './ducks';

const addToCart = createLogic({
  type: DetailsTypes.ADD_TO_CART,
  process: async ({ getState, action }, dispatch, done) => {
    let { items } = getState().cart;
    const existingItem = items.find(item => item.id === action.product.id);

    items = [...items, { ...action.product, amount: 1 }];

    if(!existingItem) {
      dispatch(Creators.updateCart({
        items,
        subtotal: items.reduce((prev, curr) => (curr.amount * curr.price) + prev, 0)
      }));
    }

    done();
  }
});

const changeAmount = createLogic({
  type: Types.CHANGE_AMOUNT,
  process: async ({ getState, action }, dispatch, done) => {
    let { items } = getState().cart;

    items = items.map(item => {
      if(item.id === action.id) {
        return { ...item, amount: action.amount };
      }

      return item;
    });

    dispatch(Creators.updateCart({
      items,
      subtotal: items.reduce((prev, curr) => (curr.amount * curr.price) + prev, 0)
    }));

    done();
  }
});

export default [addToCart, changeAmount];
