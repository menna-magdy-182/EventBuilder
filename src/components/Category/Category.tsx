import COLORS from 'constants/colors';
import COMMON_STYLES from 'constants/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import React, {useCallback} from 'react';
import {ICategory} from 'models/categories';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface CategoryProps {
  category: ICategory;
  onPress: (category: ICategory) => void;
}

const Category = ({category, onPress}: CategoryProps) => {
  const {title, image} = category;

  const onPressItem = useCallback(() => {
    onPress(category);
  }, [category, onPress]);

  return (
    <TouchableOpacity
      style={COMMON_STYLES.listItemContainer}
      onPress={onPressItem}>
      <FastImage source={{uri: image}} style={COMMON_STYLES.listItemImage} />

      <View style={styles.listItemFooter}>
        <Text style={COMMON_STYLES.listItemName}>{title}</Text>
        <Icon name="chevron-right" size={15} color={COLORS.MAIN} />
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  listItemFooter: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
});
