import COLORS from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.MAIN,
    borderColor: COLORS.MAIN,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
    minHeight: 47,
  },
  disabledContainer: {},
  disabledLabel: {},
  label: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  outlinedContainer: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.MAIN,
  },

  outlinedLabel: {
    color: COLORS.MAIN,
  },
});
export default styles;
