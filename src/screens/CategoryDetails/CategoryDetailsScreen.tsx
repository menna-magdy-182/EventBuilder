import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from 'models/navigation';
import COMMON_STYLES from 'constants/CommonStyles';
import {RouteProp} from '@react-navigation/native';
import axiosInstance from 'api/axiosInstance';
import endpoints from 'constants/endpoints';
import {useQuery} from '@tanstack/react-query';
import COLORS from 'constants/colors';
import CategoryProduct from 'components/CategoryProduct/CategoryProduct';
import Header from 'components/Header/Header';

type CategoryDetailsScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'CategoryDetails'>;
  route: RouteProp<MainStackParamList, 'CategoryDetails'>;
};

const CategoryDetails: FC<CategoryDetailsScreenProps> = ({route}) => {
  const {category} = route.params;

  const getCategoryDetails = async () => {
    const {data} = await axiosInstance.get(
      endpoints.categoryDetails(category.id),
    );
    console.log(data);
    return data;
  };

  const {isLoading, data} = useQuery({
    queryKey: [`categoryDetailsQuery${category.id}`],
    queryFn: getCategoryDetails,
  });

  if (isLoading) {
    return <ActivityIndicator animating={isLoading} color={COLORS.MAIN} />;
  }

  return (
    <View style={COMMON_STYLES.screenContainer}>
      <Header />
      <Text style={COMMON_STYLES.screenHeader}>{category.title}</Text>
      <Text style={COMMON_STYLES.screenSubheader}>
        Add to your event to view our cost estimate.
      </Text>
      <Text style={COMMON_STYLES.averagePrice}>-</Text>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <CategoryProduct item={item} />}
        columnWrapperStyle={COMMON_STYLES.listColumnWrapper}
        contentContainerStyle={COMMON_STYLES.listContentContainer}
      />
    </View>
  );
};

export default CategoryDetails;
