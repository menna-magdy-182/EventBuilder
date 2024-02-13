/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import COLORS from 'constants/colors';
import AppNavigation from 'navigation';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import store from 'store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.SCREEN_BG,
  };

  return (
    <Provider store={store}>
      <ToastProvider duration={1500}>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <AppNavigation />
        </SafeAreaView>
      </ToastProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
