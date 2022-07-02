/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { InputLogin } from '../components';
import { COLORS, FONTS } from '../constants';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputTitle}>Email or Username</Text>
        <InputLogin />
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.inputTitle}>Password</Text>
        <InputLogin isPassword={true} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  inputTitle: {
    fontFamily: FONTS.metropolisBold,
    fontSize: 30,
    color: COLORS.white,
    marginBottom: 3,
  },
  groupInput: {
    marginVertical: 30,
  },
});
