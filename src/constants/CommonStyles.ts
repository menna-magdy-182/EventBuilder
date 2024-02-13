import {StyleSheet} from 'react-native';
import COLORS from './colors';
import {SCREEN_WIDTH} from './sizes';

const COMMON_STYLES = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BG,
  },
  screenHeader: {
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 9,
  },
  screenSubheader: {
    fontSize: 16,
    color: COLORS.GRAY_MID,
    alignSelf: 'center',
    maxWidth: '60%',
    textAlign: 'center',
    marginBottom: 40,
  },
  averagePrice: {
    fontWeight: '800',
    fontSize: 37,
    alignSelf: 'center',
  },
  listItemContainer: {
    padding: 0,
    // subtract 48 as space between & around columns is 16 ( 16 * 3 )
    width: (SCREEN_WIDTH - 48) / 2,
    justifyContent: 'center',
    marginBottom: 17,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    marginEnd: 16,
  },
  listItemImage: {
    width: '100%',
    aspectRatio: 1.5,
  },

  listItemName: {
    fontWeight: '500',
  },
  listContentContainer: {
    paddingTop: 38,
    alignItems: 'flex-start',
    paddingStart: 16,
  },
});

export default COMMON_STYLES;
