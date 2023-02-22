import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomInput = ({
  placeholder,
  value,
  setValue,
  keyboardType,
  customStyle,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.textInput, customStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      keyboardType={keyboardType}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;
