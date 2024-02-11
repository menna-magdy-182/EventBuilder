import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParamList} from 'models/navigation';
import {CategoriesScreen, CategoryDetailsScreen} from 'screens';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
