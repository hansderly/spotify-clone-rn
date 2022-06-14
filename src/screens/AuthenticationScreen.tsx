/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ButtonLogin } from '../components';
import { COLORS, FONTS, icons, image, SIZES } from '../constants';

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image.bg} resizeMode={'cover'} style={styles.bg}>
        <View style={styles.innerContainer}>
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
            <ButtonLogin
              type="Secondary"
              icon="gg"
              title="Connect with Google"
            />
            <ButtonLogin
              type="Secondary"
              icon="fb"
              title="Connect with Facebook"
            />
            <ButtonLogin type="Third" title="Login" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    justifyContent: 'flex-end',
    height: SIZES.height,
  },

  bg: {
    width: SIZES.width,
    height: SIZES.height,
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.body2,
  },

  elementContainer: {
    // backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: SIZES.padding,
    marginBottom: SIZES.body1 * 1.8,
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
    // width: SIZES.width,
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    padding: SIZES.padding,
    height: SIZES.width / 1.7,
  },
});
