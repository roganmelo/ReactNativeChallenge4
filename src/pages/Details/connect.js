import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { Creators } from './ducks';

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(NavigationActions.back()),
  addToCart: product => dispatch(Creators.addToCart(product))
});

export default connect(null, mapDispatchToProps);
