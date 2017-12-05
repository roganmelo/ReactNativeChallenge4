import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    width: (metrics.screenWidth / 2) - (metrics.tinyMargin + metrics.bigMargin),
    padding: metrics.smallMargin,
    margin: metrics.tinyMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius
  },
  imageContainer: {
    marginBottom: metrics.smallMargin
  },
  image: {
    height: 180
  },
  title: {
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
  }
});
