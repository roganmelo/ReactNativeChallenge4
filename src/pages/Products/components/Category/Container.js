// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, Text, TouchableWithoutFeedback } from 'react-native';

// Assets
import styles from './styles';

const Category = ({ data, active, onPress }) => (
  <TouchableWithoutFeedback onPress={() => onPress(data.id)}>
    <View style={[styles.container, active && styles.active]}>
      <Text style={[styles.text, active && styles.activeText]}>{data.title.toUpperCase()}</Text>
    </View>
  </TouchableWithoutFeedback>
);

Category.propTypes = {
  active: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

Category.defaultProps = {
  active: false
};

export default Category;
