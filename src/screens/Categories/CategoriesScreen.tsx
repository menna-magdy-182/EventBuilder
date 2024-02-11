import axiosInstance from 'api/axiosInstance';
import Category from 'components/Category/Category';
import COLORS from 'constants/colors';
import COMMON_STYLES from 'constants/CommonStyles';
import endpoints from 'constants/endpoints';
import React, {FC} from 'react';
import styles from './styles';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {MainStackParamList} from 'models/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useQuery} from '@tanstack/react-query';
import {CustomButton} from 'components/Button/Button';
import {ICategory} from 'models/categories';
import Header from 'components/Header/Header';

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Categories'>;
};

const Categories: FC<CategoriesScreenProps> = ({navigation}) => {
  const getCategories = async () => {
    const {data} = await axiosInstance.get(endpoints.categories);
    return data;
  };

  const {isLoading, data} = useQuery({
    queryKey: ['categoriesData'],
    queryFn: getCategories,
  });

  const saveHandler = () => {};

  const onPressCategoryHandler = (category: ICategory) => {
    navigation.navigate('CategoryDetails', {category});
  };

  if (isLoading) {
    return <ActivityIndicator animating={isLoading} color={COLORS.MAIN} />;
  }

  return (
    <View style={[COMMON_STYLES.screenContainer, styles.container]}>
      <Text style={COMMON_STYLES.screenHeader}>Event Builder</Text>
      <Text style={COMMON_STYLES.screenSubheader}>
        Add to your event to view our cost estimate.
      </Text>
      <Text style={COMMON_STYLES.averagePrice}>-</Text>

      <FlatList
        data={data}
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
