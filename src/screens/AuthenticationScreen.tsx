/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonLogin } from '../components';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.elementContainer}>
        <View>
          <View style={styles.logoContainer}>
            <Image source={icons.logoWhite} style={styles.logo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Millions of songs.</Text>
            <Text style={styles.text}>Free on Spotify.</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonLogin title="Sign up Free" />
      </View>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    height: SIZES.height,
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.body1,
  },

  elementContainer: {
    // backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: SIZES.padding,
    marginBottom: SIZES.body1 * 2,
  },

  logo: {
    width: 50,
    height: 50,
  },

  textContainer: {},

  text: {
    fontFamily: FONTS.metropolisBold,
    fontSize: SIZES.h1,
    color: COLORS.white,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: SIZES.padding,
  },
});
