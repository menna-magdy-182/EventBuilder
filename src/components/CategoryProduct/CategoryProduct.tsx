import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICategoryProduct} from 'models/categories';
import COMMON_STYLES from 'constants/CommonStyles';
import FastImage from 'react-native-fast-image';
import {DEFAULT_CURRENCY} from 'constants/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {hexToRGBA} from 'utils/style.util';
import COLORS from 'constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import * as productsActions from 'store/products/products.slice';
import {Toast} from 'react-native-toast-notifications';

interface CategoryProductProps {
  item: ICategoryProduct;
}

const CategoryProduct = ({item}: CategoryProductProps) => {
  const {title, image, minBudget, maxBudget} = item;

  const {cartProducts, selectedCategoryId} = useSelector(
    (state: StoreState) => state.products,
  );
  const dispatch = useDispatch();

  const addedToCart = cartProducts.some(
    product =>
      product.id === item.id && product.categoryId === selectedCategoryId,
  );

  const addToCartHandler = () => {
    const cartProductsContainsId = cartProducts.some(
      product => product.id === item.id,
    );
    if (cartProductsContainsId) {
      Toast.show('The item is added before', {type: 'danger'});
    } else {
      dispatch(productsActions.addToCartRequested(item));
    }
  };

  return (
    <View style={COMMON_STYLES.listItemContainer}>
      <FastImage
        source={{uri: image}}
        style={COMMON_STYLES.listItemImage}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.iconContainer} onPress={addToCartHandler}>
        <Icon
          name={addedToCart ? 'check' : 'plus'}
          size={12}
          color={COLORS.WHITE}
        />
      </TouchableOpacity>

      <View style={styles.listItemFooter}>
        <Text style={COMMON_STYLES.listItemName}>{title}</Text>
        <Text style={styles.budgetRange}>
          {DEFAULT_CURRENCY}
          {minBudget} - {maxBudget}
        </Text>
      </View>
    </View>
  );
};

export default CategoryProduct;

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
