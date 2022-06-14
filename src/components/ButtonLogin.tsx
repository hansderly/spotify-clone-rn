/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

type ButtonType = 'Primary' | 'Secondary' | 'Third';

interface ButtonLoginProps {
  type: ButtonType;
  title: string;
  icon?: string;
  onPress: () => void;
}

const ButtonLogin = ({ type, title, icon, onPress }: ButtonLoginProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* {icon && <Image />} */}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 1.2,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },

  text: {
    fontFamily: FONTS.metropolisBold,
    color: COLORS.black,
  },
});
