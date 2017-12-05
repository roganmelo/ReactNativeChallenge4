import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.bigMargin,
    margin: metrics.tinyMargin,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    marginRight: metrics.bigMargin
  },
  image: {
    height: 60,
    width: 50
  },
  title: {
    maxWidth: 130,
    fontSize: fonts.small,
    fontWeight: 'bold'
  },
  brand: {
    marginBottom: metrics.tinyMargin,
    fontSize: fonts.tiny,
    fontWeight: 'bold',
    color: colors.default
  },
  price: {
    fontSize: fonts.small,
    fontWeight: 'bold',
    color: colors.success
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  amount: {
    width: 50,
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.tinyMargin,
    margin: metrics.baseMargin,
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.text.light,
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: metrics.baseRadius
  },
  removeIcon: {
    color: colors.text.light
  }
});
