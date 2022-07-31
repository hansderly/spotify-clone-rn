/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons } from '../constants';

export interface MusicItemProps {
  isAlbumScreen: boolean;
  image?: string;
  songTitle: string;
  gotLyrics: boolean;
  isExplicit: boolean;
  artistName: string;
}

const MusicItem = ({
  isAlbumScreen,
  image,
  songTitle,
  gotLyrics,
  isExplicit,
  artistName,
}: MusicItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        {!isAlbumScreen && (
          <View style={styles.imgContainer}>
            <Image source={image} style={styles.img} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.songTitle}>{songTitle}</Text>
          <View style={styles.isLyricsAndArtistName}>
            {gotLyrics && <Text style={styles.isLyrics}>Lyrics</Text>}
            {isExplicit && (
              <View>
                <Text style={styles.isExlicit}>E</Text>
              </View>
            )}
            <Text style={styles.artistName}>{artistName}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionConatiner}>
        <Pressable>
          <Image source={icons.like} style={[styles.likeIcon, styles.icon]} />
        </Pressable>
        <Pressable>
          <Image source={icons.kebabVertical} style={styles.icon} />
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
    alignItems: 'center',
    marginTop: 5,
  },
  isLyrics: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 3,
    borderRadius: 3,
    marginRight: 5,
  },
  isExlicit: {
    fontSize: 10,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 3,
    borderRadius: 3,
    marginRight: 5,
  },
  artistName: {
    fontSize: 15,
    fontFamily: FONTS.metropolisMedium,
    fontWeight: '500',
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
