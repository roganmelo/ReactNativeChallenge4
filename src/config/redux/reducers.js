import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { reducer as navReducer } from 'config/navigation';

import { reducer as productsReducer } from 'pages/Products';
import { reducer as cartReducer } from 'pages/Cart';

export default persistCombineReducers({
  key: 'root',
  storage,
  blacklist: ['form']
}, {
  nav: navReducer,
  products: productsReducer,
  cart: cartReducer
});
