/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { AlbumHeader } from '../components';
import { album } from '../data/home_data';
import MusicItemList from '../components/MusicItemList';

const AlbumScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <AlbumHeader
            albumName={album.name}
            artistName={album.artist}
            albumReleaseDate={album.releaseDate}
            imageHeaderUrl={album.imageCover}
            imageUrl={album.imageCover}
          />
        )}
        data={[album]}
        renderItem={({ item }) => <MusicItemList data={item.songList} />}
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
