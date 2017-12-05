import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    marginHorizontal: metrics.bigMargin
  },
  active: {
    borderBottomWidth: metrics.tinyMargin,
    borderBottomColor: colors.white
  },
  text: {
    fontSize: fonts.tiny,
    fontWeight: 'bold',
    color: colors.white,
    opacity: 0.6
  },
  activeText: {
    opacity: 1
  }
});
