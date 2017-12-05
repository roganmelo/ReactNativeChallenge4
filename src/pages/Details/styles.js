import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    ...general.container
  },
  card: {
    padding: metrics.bigMargin,
    margin: metrics.bigMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius
  },
  imageContainer: {
    marginBottom: metrics.bigMargin
  },
  image: {
    height: 285
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.bigMargin
  },
  title: {
    maxWidth: 160,
    fontSize: fonts.large,
    fontWeight: 'bold'
  },
  brand: {
    fontSize: fonts.tiny,
    fontWeight: 'bold',
    color: colors.default
  },
  price: {
    fontSize: fonts.huge,
    fontWeight: 'bold',
    color: colors.success
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.success,
    borderRadius: metrics.baseRadius
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.white
  }
});
