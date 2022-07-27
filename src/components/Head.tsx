/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import icon from '../constants/icon';
import { COLORS, FONTS } from '../constants';

const Head = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetingText}>Good evening</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={icon.notification} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icon.history} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icon.settings} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greetingText: {
    fontSize: 22,
    fontFamily: FONTS.metropolisBold,
    color: COLORS.white,
  },
  iconContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
