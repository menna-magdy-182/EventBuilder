import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {FC, useCallback, useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from 'models/navigation';
import COMMON_STYLES from 'constants/CommonStyles';
import {RouteProp} from '@react-navigation/native';
import COLORS from 'constants/colors';
import CategoryProduct from 'components/CategoryProduct/CategoryProduct';
import Header from 'components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import {fetchCategoryProductsRequested} from 'store/products/products.slice';
import {DEFAULT_CURRENCY} from 'constants/constant';
import Loader from 'components/Loader/Loader';

type CategoryDetailsScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'CategoryDetails'>;
  route: RouteProp<MainStackParamList, 'CategoryDetails'>;
};

const CategoryDetails: FC<CategoryDetailsScreenProps> = ({route}) => {
  const {title, id: categoryId} = route.params.category;
  const dispatch = useDispatch();
  const {loading, selectedCategoryProducts, cartProducts} = useSelector(
    (state: StoreState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchCategoryProductsRequested({categoryId}));
  }, [categoryId, dispatch]);

  const renderPricesRange = useCallback(() => {
    const minAveragePrice = cartProducts
      .filter(product => product.categoryId === categoryId)
      .reduce((sum, product) => sum + product.minBudget, 0);

    const maxAveragePrice = cartProducts
      .filter(product => product.categoryId === categoryId)
      .reduce((sum, product) => sum + product.maxBudget, 0);
    return (
      <Text style={COMMON_STYLES.averagePrice}>
        {minAveragePrice ? `${DEFAULT_CURRENCY}${minAveragePrice} ` : ''}-
        {maxAveragePrice ? ` ${DEFAULT_CURRENCY}${maxAveragePrice}` : ''}
      </Text>
    );
  }, [cartProducts, categoryId]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <View style={COMMON_STYLES.screenContainer}>
      <Header />
      <ScrollView>
        <Text style={COMMON_STYLES.screenHeader}>{title}</Text>
        <Text style={COMMON_STYLES.screenSubheader}>
          Add to your event to view our cost estimate.
        </Text>
        {renderPricesRange()}
        <FlatList
          scrollEnabled={false}
          data={selectedCategoryProducts}
          numColumns={2}
          renderItem={({item}) => <CategoryProduct item={item} />}
          contentContainerStyle={COMMON_STYLES.listContentContainer}
        />
      </ScrollView>
    </View>
  );
};

export default CategoryDetails;
