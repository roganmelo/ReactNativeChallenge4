// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Services
import { formatCurrency } from 'services';

// Assets
import styles from './styles';

export default class CartItem extends Component {
  static propTypes = {
    changeAmount: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    data: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired
    }).isRequired
  };

  state = {
    amount: this.props.data.amount.toString()
  };

  changeAmount = (id, amount) => {
    this.setState({ amount });
    this.props.changeAmount(id, amount);
  }

  render = () => {
    const { data: { id, image: uri, name, brand, price }, remove } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.price}>{formatCurrency(price)}</Text>
          </View>
        </View>
        <View style={styles.metaContainer}>
          <View>
            <TextInput
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='Adicionar repositório'
              style={styles.amount}
              onChangeText={amount => this.changeAmount(id, amount)}
              value={this.state.amount}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => remove(id)}>
            <Icon name='times' size={20} style={styles.removeIcon} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
