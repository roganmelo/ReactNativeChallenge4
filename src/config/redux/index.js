import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import middlewares from './middlewares';
import reducers from './reducers';

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
