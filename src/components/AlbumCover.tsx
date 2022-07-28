/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FONTS, image } from '../constants';

import { Album } from '../types';

const cover = image.demineur;

const AlbumCover = ({
  name = 'Demineur',
  artist = 'Lefa',
  imageCover = cover,
}: Album) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={imageCover} style={styles.img} />
      </View>
      <View style={styles.nameAndTitle}>
        <Text style={styles.albumName}>{name}</Text>
        <Text style={styles.artistName}>Album {artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumCover;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },

  img: {
    width: 150,
    height: 150,
  },

  nameAndTitle: {
    marginTop: 10,
  },

  albumName: {
    fontSize: 15,
    fontFamily: FONTS.metropolisBold,
    color: 'white',
  },

  artistName: {
    fontSize: 15,
    fontFamily: FONTS.metropolisRegular,
    color: 'white',
  },
});
