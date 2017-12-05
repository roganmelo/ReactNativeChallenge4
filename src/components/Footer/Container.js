// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Assets
import styles from './styles';

const tabs = [
  { index: 0, icon: 'home' },
  { index: 1, icon: 'shopping-cart' }
];

const Footer = ({ navigationState, jumpToIndex }) => (
  <View style={styles.container}>
    <For each='tab' of={tabs}>
      <TouchableWithoutFeedback
        key={tab.index}
        onPress={() => jumpToIndex(tab.index)}
        style={styles.tabItem}
      >
        <Icon
          name={tab.icon}
          size={25}
          style={[styles.icon, navigationState.index === tab.index && styles.active]}
        />
      </TouchableWithoutFeedback>
    </For>
  </View>
);

Footer.propTypes = {
  jumpToIndex: PropTypes.func.isRequired,
  navigationState: PropTypes.shape({
    index: PropTypes.number.isRequired
  }).isRequired
};

export default Footer;
