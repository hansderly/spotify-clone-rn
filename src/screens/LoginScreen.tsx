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
        <InputLogin type="email" />
      </View>
      <View style={styles.groupInput}>
        <Text style={styles.inputTitle}>Password</Text>
        <InputLogin type="password" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
