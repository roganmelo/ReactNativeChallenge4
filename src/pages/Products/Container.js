// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Header } from 'components';
import Category from './components/Category';
import Product from './components/Product';

// Assets
import styles from './styles';

export default class Products extends Component {
  static propTypes = {
    selectedCategory: PropTypes.number.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    changeCategory: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    categories: PropTypes.arrayOf(Category.propTypes.data).isRequired,
    products: PropTypes.arrayOf(Product.propTypes.data).isRequired
  };

  static defaultProps = {
    loading: false
  };

  componentDidMount = () => {
    this.props.fetchCategories();
    this.props.fetchProducts(this.props.selectedCategory);
  }

  changeCategory = category => {
    this.props.changeCategory(category);
    this.props.fetchProducts(category);
  }

  render = () => (
    <View style={styles.container}>
      <Header title='APP_NAME' />
      <View style={styles.categoriesTabbar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesTabbarContent}
        >
          <For each='category' of={this.props.categories}>
            <Category
              key={category.id}
              data={category}
              active={category.id === this.props.selectedCategory}
              onPress={this.changeCategory}
            />
          </For>
        </ScrollView>
      </View>
      <Choose>
        <When condition={this.props.loading}>
          <ActivityIndicator style={styles.loading} />
        </When>
        <Otherwise>
          <ScrollView contentContainerStyle={styles.content}>
            <For each='product' of={this.props.products}>
              <Product
                key={product.id}
                data={product}
                onPress={() => this.props.navigateTo('Details', { product })}
              />
            </For>
          </ScrollView>
        </Otherwise>
      </Choose>
    </View>
  )
}
