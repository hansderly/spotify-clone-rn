/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export interface ImageHeaderAlbumOrPlaylistProps {
  imageHeaderUrl: string;
}
const ImageHeaderAlbumOrPlaylist = ({
  imageHeaderUrl,
}: ImageHeaderAlbumOrPlaylistProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageHeaderUrl} style={styles.imageAlbum} />
    </View>
  );
};

export default ImageHeaderAlbumOrPlaylist;

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
  },
  imageAlbum: {
    width: 250,
    height: 250,
  },
});
