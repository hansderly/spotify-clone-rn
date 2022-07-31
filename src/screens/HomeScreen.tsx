/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header, AlbumCategory } from '../components';
import { COLORS } from '../constants';
import data from '../data/home_data';
import AlbumScreen from './AlbumScreen';

const HomeScreen = () => {
  return (
    <AlbumScreen />
    // <View style={styles.container}>
    //   <FlatList
    //     ListHeaderComponent={() => <Header />}
    //     ListHeaderComponentStyle={styles.header}
    //     showsVerticalScrollIndicator={false}
    //     data={data}
    //     renderItem={({ item }) => (
    //       <View style={styles.category}>
    //         <AlbumCategory title={item.title} albumsList={item.albumsList} />
    //       </View>
    //     )}
    //   />
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    marginBottom: 10,
  },
  category: {
    marginVertical: 10,
  },
});
