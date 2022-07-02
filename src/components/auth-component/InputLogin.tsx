/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons } from '../../constants';

interface InputLoginProps {
  isPassword?: boolean;
}

const InputLogin = ({ isPassword }: InputLoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} />
      {isPassword && (
        <TouchableOpacity style={styles.iconContainer}>
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
    width: 30,
    height: 30,
  },
});
