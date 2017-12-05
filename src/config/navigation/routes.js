import { StackNavigator, TabNavigator } from 'react-navigation';

import { Footer } from 'components';

import Products from 'pages/Products';
import Cart from 'pages/Cart';
import Details from 'pages/Details';

const ProductsRoutes = StackNavigator({
  Products: { screen: Products },
  Details: { screen: Details }
}, {
  headerMode: 'none'
});

export default TabNavigator({
  Products: { screen: ProductsRoutes },
  Cart: { screen: Cart }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: Footer
});
