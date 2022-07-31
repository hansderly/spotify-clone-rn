/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../constants';

export interface ArtistProps {
  imageUrl: string;
  artistName: string;
}

const Artist = ({ imageUrl, artistName }: ArtistProps) => {
  return (
    <View style={styles.artistContainer}>
      <View>
        <Image source={imageUrl} style={styles.artistProfile} />
      </View>
      <Text style={styles.artistName}>{artistName}</Text>
    </View>
  );
};

export default Artist;

const styles = StyleSheet.create({
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistProfile: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  artistName: {
    fontSize: 15,
    fontFamily: FONTS.metropolisBold,
    color: COLORS.white,
  },
});
