// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Text as NBText } from 'native-base';

// Services
import { t } from 'services';

// Assets
import styles from './styles';

const Text = ({ phrase, values, light, bold, children, style, ...props }) => (
  <NBText
    style={[
      styles[light ? 'light' : 'dark'],
      styles[bold ? 'bold' : ''],
      style
    ]}
    {...props}
  >
    {t(phrase || children, values)}
  </NBText>
);

Text.propTypes = {
  phrase: PropTypes.string.isRequired,
  values: PropTypes.shape({}),
  light: PropTypes.bool,
  bold: PropTypes.bool,
  style: NBText.propTypes.style,
  children: PropTypes.string
};

Text.defaultProps = {
  values: undefined,
  light: false,
  bold: false,
  style: undefined,
  children: ''
};

export default Text;
