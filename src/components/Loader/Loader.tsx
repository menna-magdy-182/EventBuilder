import React from 'react';
import COLORS from 'constants/colors';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Loader = ({loading}: {loading: boolean}) => {
  return (
    <ActivityIndicator
      animating={loading}
      color={COLORS.MAIN}
      style={styles.loadingIndicator}
      size={'large'}
    />
  );
};

export default Loader;
const styles = StyleSheet.create({
  loadingIndicator: {
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: COLORS.SCREEN_BG,
  },
});
