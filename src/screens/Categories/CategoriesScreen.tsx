import Category from 'components/Category/Category';
import COMMON_STYLES from 'constants/CommonStyles';
import React, {FC, useEffect, useMemo} from 'react';
import styles from './styles';
import {FlatList, ScrollView} from 'react-native';
import {MainStackParamList} from 'models/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BUTTON_MODE, CustomButton} from 'components/Button/Button';
import {ICategory} from 'models/categories';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesRequested} from 'store/categories/categories.slice';
import {StoreState} from 'models/store';
import {DEFAULT_CURRENCY} from 'constants/constant';
import Loader from 'components/Loader/Loader';
import CustomText from 'components/Text/Text';

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Categories'>;
};

const Categories: FC<CategoriesScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequested());
  }, [dispatch]);

  const {categoriesList, loading, cartProducts} = useSelector(
    (state: StoreState) => ({
      categoriesList: state.categories.categoriesList,
      loading: state.categories.loading,
      cartProducts: state.products.cartProducts,
    }),
  );

  const totalAveragePrice = useMemo(() => {
    return cartProducts.length
      ? cartProducts.reduce((sum, product) => sum + product.avgBudget, 0)
      : 0;
  }, [cartProducts]);

  const saveHandler = () => navigation.navigate('Checkout');

  const onPressCategoryHandler = (category: ICategory) => {
    navigation.navigate('CategoryDetails', {category});
  };

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <ScrollView
      contentContainerStyle={[COMMON_STYLES.screenContainer, styles.container]}>
      <CustomText style={COMMON_STYLES.screenHeader}>Event Builder</CustomText>
      <CustomText style={COMMON_STYLES.screenSubheader}>
        Add to your event to view our cost estimate.
      </CustomText>

      <CustomText style={COMMON_STYLES.averagePrice}>
        {totalAveragePrice ? `${DEFAULT_CURRENCY}${totalAveragePrice}` : '-'}
      </CustomText>
      <FlatList
        data={categoriesList}
        scrollEnabled={false}
        numColumns={2}
        renderItem={({item}) => (
          <Category category={item} onPressCategory={onPressCategoryHandler} />
        )}
        contentContainerStyle={COMMON_STYLES.listContentContainer}
      />
      {!!cartProducts.length && (
        <CustomButton
          title="Save"
          onPress={saveHandler}
          style={styles.saveButton}
        />
      )}
    </ScrollView>
  );
};

export default Categories;
