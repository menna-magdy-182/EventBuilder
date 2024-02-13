import CustomText from 'components/Text/Text';
import React from 'react';
import {
  TouchableOpacity,
  type TextStyle,
  type ViewStyle,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import COLORS from 'constants/colors';

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
      {isLoading ? (
        <ActivityIndicator color={COLORS.WHITE} />
      ) : (
        <CustomText
          style={[
            styles.label,
            mode === BUTTON_MODE.OUTLINED && styles.outlinedLabel,
            disabled && styles.disabledLabel,
            labelStyle,
          ]}>
          {title || 'click here'}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export {CustomButton};
