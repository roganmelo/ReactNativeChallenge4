// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'components';

// Assets
import styles from './styles';

const Header = ({ title, back }) => (
  <View style={styles.container}>
    <Choose>
      <When condition={back}>
        <TouchableWithoutFeedback onPress={back}>
          <Icon name='angle-left' size={20} style={styles.icon} />
        </TouchableWithoutFeedback>
      </When>
      <Otherwise>
        <View />
      </Otherwise>
    </Choose>
    <Text phrase={title} style={styles.title} />
    <View />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.func
};

Header.defaultProps = {
  back: null
};

export default Header;
