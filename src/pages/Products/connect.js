import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { Creators } from './ducks';

const mapStateToProps = ({ products: state }) => ({
  loading: state.categoriesLoading || state.productsLoading,
  selectedCategory: state.selectedCategory,
  categories: state.categories,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(Creators.fetchCategories()),
  fetchProducts: category => dispatch(Creators.fetchProducts(category)),
  changeCategory: category => dispatch(Creators.changeCategory(category)),
  navigateTo: (routeName, params) => dispatch(NavigationActions.navigate({ routeName, params }))
});

export default connect(mapStateToProps, mapDispatchToProps);
