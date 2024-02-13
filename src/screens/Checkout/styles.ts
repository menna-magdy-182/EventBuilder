import COLORS from 'constants/colors';
import {SCREEN_WIDTH} from 'constants/sizes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {justifyContent: 'center'},
  circleContainer: {
    backgroundColor: COLORS.WHITE,
    width: SCREEN_WIDTH * 0.65,
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: SCREEN_WIDTH * 0.325,
    alignSelf: 'center',
    position: 'absolute',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '800',
  },
  totalPriceText: {
    fontSize: 37,
    fontWeight: '800',
    flexWrap: 'nowrap',
    flexShrink: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: SCREEN_WIDTH * 0.65,
  },
});
export default styles;
