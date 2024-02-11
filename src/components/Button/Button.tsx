import COLORS from 'constants/colors';
import {calcWidth} from 'constants/sizes';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  type TextStyle,
  type ViewStyle,
  Text,
} from 'react-native';

export enum BUTTON_MODE {
  OUTLINED,
  CONTAINED,
}
interface IProps {
  mode?: BUTTON_MODE;
  title: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}
const CustomButton = ({
  mode = BUTTON_MODE.CONTAINED,
  style,
  title,
  labelStyle,
  onPress,
  disabled,
  isLoading,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        mode === BUTTON_MODE.OUTLINED && styles.outlinedContainer,
        disabled && styles.disabledContainer,
        style,
      ]}>
      <Text
        style={[
          styles.label,
          mode === BUTTON_MODE.OUTLINED && styles.outlinedLabel,
          disabled && styles.disabledLabel,
          labelStyle,
        ]}>
        {title || 'click here'}
      </Text>
    </TouchableOpacity>
  );
};

export {CustomButton};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.MAIN,
    borderColor: COLORS.MAIN,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
    minHeight: 47,
  },
  disabledContainer: {},
  disabledLabel: {},
  label: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  outlinedContainer: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.MAIN,
  },

  outlinedLabel: {
    color: COLORS.MAIN,
  },
});
