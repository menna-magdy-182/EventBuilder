/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import COLORS from 'constants/colors';
import AppNavigation from 'navigation';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import store from 'store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.SCREEN_BG,
  };
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <AppNavigation />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
