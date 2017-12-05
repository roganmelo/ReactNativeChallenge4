import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    ...general.container
  },
  categoriesTabbar: {
    height: 44,
    backgroundColor: colors.secundary.base
  },
  categoriesTabbarContent: {
    flexDirection: 'row'
  },
  loading: {
    marginTop: metrics.bigMargin
  },
  content: {
    ...general.section,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
