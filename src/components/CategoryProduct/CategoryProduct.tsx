import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ICategoryProduct} from 'models/categories';
import COMMON_STYLES from 'constants/CommonStyles';
import FastImage from 'react-native-fast-image';
import {DEFAULT_CURRENCY} from 'constants/constant';

interface CategoryProductProps {
  item: ICategoryProduct;
}

const CategoryProduct = ({item}: CategoryProductProps) => {
  const {title, image, minBudget, maxBudget} = item;
  return (
    <View style={COMMON_STYLES.listItemContainer}>
      <FastImage source={{uri: image}} style={COMMON_STYLES.listItemImage} />
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
});
