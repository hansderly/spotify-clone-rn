/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS, icons } from '../../constants';

type InputType = 'email' | 'password';
interface InputLoginProps {
  type: InputType;
}

const InputLogin = ({ type }: InputLoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [inputTex, setInputText] = useState<string>('');

  const onPressShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        value={inputTex}
        onChangeText={value => setInputText(value)}
        secureTextEntry={type === 'password' && showPassword}
      />
      {type === 'password' && (
        <TouchableOpacity
          onPress={onPressShowPassword}
          style={styles.iconContainer}>
          <Image source={icons.eye} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 5,
    backgroundColor: COLORS.grayDark,
    color: COLORS.white,
    fontSize: 15,
    // fontWeight: 'bold',
  },
  iconContainer: {
    flex: 1,
    right: 10,
    flexDirection: 'row-reverse',
    position: 'absolute',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
