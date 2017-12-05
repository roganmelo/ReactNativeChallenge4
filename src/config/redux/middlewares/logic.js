import { createLogicMiddleware } from 'redux-logic';

import { logic as productsLogic } from 'pages/Products';
import { logic as cartLogic } from 'pages/Cart';

export default createLogicMiddleware([
  ...productsLogic,
  ...cartLogic
]);
