/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MusicItem, { MusicItemProps } from './MusicItem';

interface MusicItemListProps {
  data: MusicItemProps[];
}

const MusicItemList = ({ data }: MusicItemListProps) => {
  console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.musicItemContainer}>
          <MusicItem
            artistName={item.artistName}
            songTitle={item.songTitle}
            isExplicit={item.isExplicit}
            isAlbumScreen={true}
            gotLyrics={false}
          />
        </View>
      )}
    />
  );
};

export default MusicItemList;

const styles = StyleSheet.create({
  musicItemContainer: {
    margin: 10,
  },
});
