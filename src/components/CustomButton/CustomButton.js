import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../utils/colors';

const CustomButton = ({
  value,
  onPress,
  verified,
  disabled,
  customStyle,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button(verified), customStyle]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.textStyle}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
