import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import COLORS from 'constants/colors';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const backHandler = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={20}
        color={COLORS.BLACK}
        onPress={backHandler}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingStart: 37,
    marginTop: 20,
  },
});
