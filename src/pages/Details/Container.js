// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, Image, Text as RNText, TouchableOpacity } from 'react-native';
import { Header, Text } from 'components';
import Product from 'pages/Products/components/Product';

// Services
import { formatCurrency } from 'services';

// Assets
import styles from './styles';

const Details = ({ back, navigation, addToCart }) => {
  const { product } = navigation.state.params;

  return (
    <View style={styles.container}>
      <Header back={back} title='DETAILS' />
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <View>
            <RNText style={styles.title}>{product.name}</RNText>
            <RNText style={styles.brand}>{product.brand}</RNText>
          </View>
          <RNText style={styles.price}>{formatCurrency(product.price)}</RNText>
        </View>
        <View>
          <TouchableOpacity onPress={() => addToCart(product)} style={styles.button}>
            <Text phrase='ADD_TO_CART' style={styles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Details.propTypes = {
  back: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        product: Product.propTypes.data.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Details;
