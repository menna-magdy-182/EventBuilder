import COLORS from 'constants/colors';
import COMMON_STYLES from 'constants/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import React, {useCallback} from 'react';
import {ICategory} from 'models/categories';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import styles from './styles';
import CustomText from 'components/Text/Text';

interface CategoryProps {
  category: ICategory;
  onPressCategory: (category: ICategory) => void;
}

const Category = ({category, onPressCategory}: CategoryProps) => {
  const {title, image} = category;

  const {cartProducts} = useSelector((state: StoreState) => state.products);

  const productsCounter = cartProducts.filter(
    item => item.categoryId === category.id,
  ).length;

  const onPressItem = useCallback(() => {
    onPressCategory(category);
  }, [category, onPressCategory]);

  return (
    <TouchableOpacity
      style={COMMON_STYLES.listItemContainer}
      onPress={onPressItem}>
      <FastImage
        source={{uri: image}}
        style={COMMON_STYLES.listItemImage}
        resizeMode="stretch"
      />
      {Boolean(productsCounter) && (
        <View style={styles.counterContainer}>
          <CustomText style={styles.counterText}>
            {String(productsCounter).padStart(2, '0')}
          </CustomText>
        </View>
      )}

      <View style={styles.listItemFooter}>
        <CustomText style={COMMON_STYLES.listItemName}>{title}</CustomText>
        <Icon name="chevron-right" size={15} color={COLORS.MAIN} />
      </View>
    </TouchableOpacity>
  );
};

export default Category;
