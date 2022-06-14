/* eslint-disable prettier/prettier */

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const COLORS = {
  //   base
  primary: '#1DB954',
  lightGreen: '#1ED760',

  //   colors
  white: '#FFFFFF',
  black: '#191414',
};

const SIZES = {
  // golbal size
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

const FONTS = {
  metropolisRegular: 'Metropolis-Regular',
  metropolisMedium: 'Metropolis-Medium',
  metropolisSemiBold: 'Metropolis-SemiBold',
  metropolisBold: 'Metropolis-Bold',
  metropolisBlack: 'Metropolis-Black',
};

export { COLORS, SIZES, FONTS };
