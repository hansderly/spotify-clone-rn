/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../constants';

const ActionRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Pressable>
          <Image source={icons.heart} style={[styles.icon]} />
        </Pressable>
        {true && (
          <Pressable>
            <Image
              source={icons.arrowDownCircle}
              style={[styles.customMg, styles.icon]}
            />
          </Pressable>
        )}
        <Pressable>
          <Image source={icons.kebabVertical} style={[styles.icon]} />
        </Pressable>
      </View>

      <View style={styles.rightSide}>
        {true && (
          <Pressable>
            <Image source={icons.shuffle} style={[styles.icon]} />
          </Pressable>
        )}
        <Pressable style={styles.playIcon}>
          <Image source={icons.play} style={[styles.icon]} />
        </Pressable>
      </View>
    </View>
  );
};

export default ActionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
  },
  customMg: {
    marginHorizontal: 25,
  },
  icon: {
    width: 30,
    height: 30,
  },
  playIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
