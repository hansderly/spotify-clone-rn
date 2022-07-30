/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, image, icons } from '../constants';

const MusicItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <View style={styles.imgContainer}>
          <Image source={image.demineur} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.songTitle}>Hurt</Text>
          <View style={styles.isLyricsAndArtistName}>
            <Text style={styles.isLyrics}>Lyrics</Text>
            <Text style={styles.artistName}>Johnny Cash</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionConatiner}>
        <Pressable>
          <Image source={icons.like} style={[styles.likeIcon, styles.icon]} />
        </Pressable>
        <Pressable>
          <Image source={icons.option} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default MusicItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  infosContainer: {
    flexDirection: 'row',
  },

  imgContainer: {
    marginRight: 10,
  },
  img: {
    width: 50,
    height: 50,
  },

  textContainer: {},
  songTitle: {
    fontSize: 17,
    fontFamily: FONTS.metropolisMedium,
    color: COLORS.white,
  },
  isLyricsAndArtistName: {
    flexDirection: 'row',
  },
  isLyrics: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 3,
    borderRadius: 3,
    marginRight: 5,
  },
  artistName: {
    fontSize: 15,
    fontFamily: FONTS.metropolisRegular,
    color: COLORS.gray,
  },

  actionConatiner: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  likeIcon: {
    marginRight: 25,
  },
});
