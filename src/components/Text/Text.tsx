import React from 'react';
import {Text, StyleSheet, TextProps, Platform} from 'react-native';

const CustomText = (props: TextProps) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Avenir-Regular',
  },
});

export default CustomText;
