/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { AlbumCategoryProps } from '../types';
import AlbumCover from './AlbumCover';
import { FONTS } from '../constants';

const AlbumCategory = ({ title, albumsList }: AlbumCategoryProps) => {
  return (
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={albumsList}
        renderItem={({ item }) => (
          <AlbumCover
            id={item.id}
            name={item.name}
            artist={item.artist}
            imageCover={item.imageCover}
          />
        )}
      />
    </View>
  );
};

export default AlbumCategory;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONTS.metropolisBold,
    color: 'white',
    marginLeft: 10,
    marginBottom: 10,
  },
  category: {
    marginVertical: 30,
  },
});
