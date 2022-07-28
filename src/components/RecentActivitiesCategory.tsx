/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import RecentActivities from './RecentActivities';
import { image } from '../constants';

const data = [
  {
    id: 1,
    image: image.likedSong,
    title: 'Liked Songs',
    isCurrent: true,
  },
  {
    id: 2,
    image: image.demineur,
    title: 'Demineur',
    isCurrent: false,
  },
  {
    id: 3,
    image: image.deuxfreres,
    title: 'Deux Freres',
    isCurrent: false,
  },
  {
    id: 4,
    image: image.evolve,
    title: 'Evolve',
    isCurrent: false,
  },

  {
    id: 5,
    image: image.jrapencore,
    title: "J'rap encore",
    isCurrent: false,
  },
  {
    id: 7,
    image: image.neptune,
    title: 'Neptune Terminus',
    isCurrent: false,
  },
];

const RecentActivitiesCategory = () => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({ item }) => (
          <View style={styles.marginColumn}>
            <RecentActivities
              title={item.title}
              imageActivity={item.image}
              isCurrent={item.isCurrent}
            />
          </View>
        )}
      />
    </View>
  );
};

export default RecentActivitiesCategory;

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'center',
  },
  marginColumn: {
    margin: 4,
  },
});
