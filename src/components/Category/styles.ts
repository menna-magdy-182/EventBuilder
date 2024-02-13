import COLORS from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItemFooter: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  counterContainer: {
    backgroundColor: COLORS.MAIN,
    position: 'absolute',
    minWidth: 30,
    minHeight: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
    right: 7,
  },
  counterText: {
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});
export default styles;
