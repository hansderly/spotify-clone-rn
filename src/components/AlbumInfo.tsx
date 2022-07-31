/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../constants';
import Artist, { ArtistProps } from './Artist';

export interface AlbumInfoProps extends ArtistProps {
  albumName: string;
  albumReleaseDate: string;
}

const AlbumInfo = ({
  albumName,
  albumReleaseDate,
  artistName,
  imageUrl,
}: AlbumInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.albumName}>{albumName}</Text>
      <View style={styles.artistContainer}>
        <Artist artistName={artistName} imageUrl={imageUrl} />
      </View>
      <Text style={styles.albumReleaseDate}>Album • {albumReleaseDate}</Text>
    </View>
  );
};

export default AlbumInfo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  albumName: {
    fontSize: 25,
    fontFamily: FONTS.metropolisBold,
    color: COLORS.white,
  },
  artistContainer: {
    marginVertical: 10,
  },
  albumReleaseDate: {
    fontSize: 15,
    fontFamily: FONTS.metropolisMedium,
    color: COLORS.gray,
  },
});
