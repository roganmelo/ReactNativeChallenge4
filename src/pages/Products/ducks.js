import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const prefix = '@PRODUCTS/';

// Types and Creators
export const { Types, Creators } = createActions({
  fetchCategories: null,
  fetchCategoriesPending: null,
  fetchCategoriesFulfilled: ['data'],
  fetchCategoriesRejected: null,

  fetchProducts: ['category'],
  fetchProductsPending: null,
  fetchProductsFulfilled: ['data'],
  fetchProductsRejected: null,

  changeCategory: ['category']
}, { prefix });

// Reducer
const INITIAL_STATE = Immutable({
  selectedCategory: 1,
  categories: [],
  products: [],
  error: false,
  categoriesLoading: false,
  productsLoading: false
});

const HANDLERS = {
  [Types.FETCH_CATEGORIES_PENDING]: state => Immutable({
    ...state,
    categoriesLoading: true
  }),
  [Types.FETCH_CATEGORIES_FULFILLED]: (state, { data }) => Immutable({
    ...state,
    categories: data,
    categoriesLoading: false
  }),
  [Types.FETCH_CATEGORIES_REJECTED]: state => Immutable({
    ...state,
    error: true,
    categoriesLoading: false
  }),


  [Types.FETCH_PRODUCTS_PENDING]: state => Immutable({
    ...state,
    productsLoading: true
  }),
  [Types.FETCH_PRODUCTS_FULFILLED]: (state, { data }) => Immutable({
    ...state,
    products: data,
    productsLoading: false
  }),
  [Types.FETCH_PRODUCTS_REJECTED]: state => Immutable({
    ...state,
    error: true,
    productsLoading: false
  }),


  [Types.CHANGE_CATEGORY]: (state, { category }) => Immutable({
    ...state,
    selectedCategory: category
  })
};

export default createReducer(INITIAL_STATE, HANDLERS);
