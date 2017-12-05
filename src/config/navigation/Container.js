import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import Routes from './routes';

const Navigator = ({ dispatch, nav }) => (
  <Routes
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array
  }).isRequired
};

export default Navigator;
