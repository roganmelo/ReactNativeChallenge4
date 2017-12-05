import { createLogic } from 'redux-logic';
import { Types, Creators } from './ducks';

const fetchCategories = createLogic({
  type: Types.FETCH_CATEGORIES,
  process: async ({ action }, dispatch, done) => {
    dispatch(Creators.fetchCategoriesPending());

    try {
      let res = await fetch('http://localhost:3000/categories');
      res = await res.json();
      dispatch(Creators.fetchCategoriesFulfilled(res));
    } catch(err) {
      dispatch(Creators.fetchCategoriesRejected());
    } finally {
      done();
    }
  }
});

const fetchProducts = createLogic({
  type: Types.FETCH_PRODUCTS,
  process: async ({ action }, dispatch, done) => {
    dispatch(Creators.fetchProductsPending());

    try {
      let res = await fetch(`http://localhost:3000/category_products/${action.category}`);
      res = await res.json();

      dispatch(Creators.fetchProductsFulfilled(res.products));
    } catch(err) {
      dispatch(Creators.fetchProductsRejected());
    } finally {
      done();
    }
  }
});

export default [fetchCategories, fetchProducts];
