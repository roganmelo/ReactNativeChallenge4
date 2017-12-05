import { connect } from 'react-redux';

import { Creators } from './ducks';

const mapStateToProps = ({ cart: state }) => ({
  items: state.items,
  subtotal: state.subtotal
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(Creators.removeItem(id)),
  changeAmount: (id, amount) => dispatch(Creators.changeAmount(id, amount))
});

export default connect(mapStateToProps, mapDispatchToProps);
