import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.background
  },
  tabItem: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    color: colors.default,
    opacity: 0.6
  },
  active: {
    color: colors.secundary.base,
    opacity: 1
  }
});
