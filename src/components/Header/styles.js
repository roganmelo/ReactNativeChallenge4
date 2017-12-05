import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    height: 54,
    marginTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  title: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.secundary.base
  }
});
