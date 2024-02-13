import Category from 'components/Category/Category';
import COLORS from 'constants/colors';
import COMMON_STYLES from 'constants/CommonStyles';
import React, {FC, useEffect} from 'react';
import styles from './styles';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {MainStackParamList} from 'models/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomButton} from 'components/Button/Button';
import {ICategory} from 'models/categories';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesRequested} from 'store/categories/categories.slice';
import {StoreState} from 'models/store';

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Categories'>;
};

const Categories: FC<CategoriesScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequested());
  }, [dispatch]);

  const {categoriesList, loading} = useSelector(
    (state: StoreState) => state.categories,
  );

  const saveHandler = () => {};

  const onPressCategoryHandler = (category: ICategory) => {
    navigation.navigate('CategoryDetails', {category});
  };

  if (loading) {
    return <ActivityIndicator animating={loading} color={COLORS.MAIN} />;
  }

  return (
    <View style={[COMMON_STYLES.screenContainer, styles.container]}>
      <Text style={COMMON_STYLES.screenHeader}>Event Builder</Text>
      <Text style={COMMON_STYLES.screenSubheader}>
        Add to your event to view our cost estimate.
      </Text>
      <Text style={COMMON_STYLES.averagePrice}>-</Text>

      <FlatList
        data={categoriesList}
        numColumns={2}
        renderItem={({item}) => (
          <Category category={item} onPress={onPressCategoryHandler} />
        )}
        columnWrapperStyle={COMMON_STYLES.listColumnWrapper}
        contentContainerStyle={COMMON_STYLES.listContentContainer}
      />

      <CustomButton
        title="Save"
        onPress={saveHandler}
        style={styles.saveButton}
      />
    </View>
  );
};

export default Categories;
