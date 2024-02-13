import {View} from 'react-native';
import React, {useMemo} from 'react';
import COMMON_STYLES from 'constants/CommonStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import {DEFAULT_CURRENCY} from 'constants/constant';
import CustomText from 'components/Text/Text';
import styles from './styles';

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
        <CustomText style={styles.descriptionText}>Event Saved!</CustomText>
        <CustomText style={styles.totalPriceText}>
          {`${DEFAULT_CURRENCY}${averageMinPrice} - ${DEFAULT_CURRENCY}${averageMaxPrice}`}
        </CustomText>

        <Icon name="star" size={40} />
      </View>
    </View>
  );
};

export default CheckoutScreen;
