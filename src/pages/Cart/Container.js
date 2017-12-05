// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, ScrollView, Text as RNText } from 'react-native';
import { Header, Text } from 'components';
import CartItem from './components/CartItem';

// Services
import { formatCurrency } from '../../services';

// Assets
import styles from './styles';

const Cart = ({ items, subtotal, removeItem, changeAmount }) => (
  <View style={styles.container}>
    <Header title='CART' />
    <ScrollView contentContainerStyle={styles.content}>
      <For each='item' of={items}>
        <CartItem key={item.id} data={item} remove={removeItem} changeAmount={changeAmount} />
      </For>
    </ScrollView>
    <View style={styles.subtotal}>
      <Text phrase='SUBTOTAL' style={styles.subtotalTitle} />
      <RNText style={styles.subtotalValue}>{formatCurrency(subtotal)}</RNText>
    </View>
  </View>
);

Cart.propTypes = {
  subtotal: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  changeAmount: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(CartItem.propTypes.data).isRequired
};

export default Cart;
