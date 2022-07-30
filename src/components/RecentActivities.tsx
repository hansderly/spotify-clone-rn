/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../constants';

type RecentActivitiesProp = {
  imageActivity: string;
  title: string;
  isCurrent: boolean;
};

const RecentActivities = ({
  imageActivity,
  title,
  isCurrent,
}: RecentActivitiesProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imageActivity} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default RecentActivities;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 195,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: COLORS.grayDark,
  },
  imgContainer: {},
  img: {
    width: 50,
    height: 50,
  },

  textContainer: {
    marginLeft: 10,
  },

  text: {
    fontFamily: FONTS.metropolisMedium,
    fontSize: 15,
    color: COLORS.white,
  },
});
