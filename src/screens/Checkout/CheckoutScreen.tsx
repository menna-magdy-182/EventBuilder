import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import COMMON_STYLES from 'constants/CommonStyles';
import COLORS from 'constants/colors';
import {SCREEN_WIDTH} from 'constants/sizes';
import Icon from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import {DEFAULT_CURRENCY} from 'constants/constant';

const CheckoutScreen = () => {
  const {cartProducts} = useSelector((state: StoreState) => state.products);

  const averageMinPrice = useMemo(() => {
    return cartProducts.reduce((sum, product) => sum + product.minBudget, 0);
  }, [cartProducts]);

  const averageMaxPrice = useMemo(() => {
    return cartProducts.reduce((sum, product) => sum + product.maxBudget, 0);
  }, [cartProducts]);

  return (
    <View style={[COMMON_STYLES.screenContainer, styles.screenContainer]}>
      <View style={styles.circleContainer} />

      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>Event Saved!</Text>
        <Text style={styles.totalPriceText}>
          {`${DEFAULT_CURRENCY}${averageMinPrice} - ${DEFAULT_CURRENCY}${averageMaxPrice}`}
        </Text>

        <Icon name="star" size={40} />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  screenContainer: {justifyContent: 'center'},
  circleContainer: {
    backgroundColor: COLORS.MAIN,
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
