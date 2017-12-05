import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    ...general.container
  },
  content: {
    margin: metrics.baseMargin
  },
  subtotal: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.background
  },
  subtotalTitle: {
    marginBottom: metrics.smallMargin,
    fontSize: fonts.small,
    fontWeight: 'bold',
    color: colors.text.light
  },
  subtotalValue: {
    fontSize: fonts.huge,
    fontWeight: 'bold',
    color: colors.success
  }
});
