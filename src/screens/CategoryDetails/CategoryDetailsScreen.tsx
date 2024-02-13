import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {FC, useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from 'models/navigation';
import COMMON_STYLES from 'constants/CommonStyles';
import {RouteProp} from '@react-navigation/native';
import COLORS from 'constants/colors';
import CategoryProduct from 'components/CategoryProduct/CategoryProduct';
import Header from 'components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from 'models/store';
import {
  fetchCategoryProductsRequested,
  fetchCategoryProductsSucceeded,
} from 'store/products/products.slice';

type CategoryDetailsScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'CategoryDetails'>;
  route: RouteProp<MainStackParamList, 'CategoryDetails'>;
};

const CategoryDetails: FC<CategoryDetailsScreenProps> = ({route}) => {
  const {title, id: categoryId} = route.params.category;
  const dispatch = useDispatch();

  const {loading, selectedCategoryProducts} = useSelector(
    (state: StoreState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchCategoryProductsRequested({categoryId}));
  }, [categoryId, dispatch]);

  if (loading) {
    return <ActivityIndicator animating={loading} color={COLORS.MAIN} />;
  }

  return (
    <View style={COMMON_STYLES.screenContainer}>
      <Header />
      <Text style={COMMON_STYLES.screenHeader}>{title}</Text>
      <Text style={COMMON_STYLES.screenSubheader}>
        Add to your event to view our cost estimate.
      </Text>
      <Text style={COMMON_STYLES.averagePrice}>-</Text>

      <FlatList
        data={selectedCategoryProducts}
        numColumns={2}
        renderItem={({item}) => <CategoryProduct item={item} />}
        columnWrapperStyle={COMMON_STYLES.listColumnWrapper}
        contentContainerStyle={COMMON_STYLES.listContentContainer}
      />
    </View>
  );
};

export default CategoryDetails;
