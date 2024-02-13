import COLORS from 'constants/colors';
import {StyleSheet} from 'react-native';
import {hexToRGBA} from 'utils/style.util';

const styles = StyleSheet.create({
  listItemFooter: {
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  budgetRange: {
    fontWeight: '900',
    marginTop: 5,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: hexToRGBA(COLORS.BLACK, '.3'),
    top: 5,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
