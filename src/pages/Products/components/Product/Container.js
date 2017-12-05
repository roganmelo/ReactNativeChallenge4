// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';

// Services
import { formatCurrency } from 'services';

// Assets
import styles from './styles';

const Product = ({ data, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.price}>{formatCurrency(data.price)}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Product.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Product;
