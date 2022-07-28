/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header, AlbumCategory, RecentActivities } from '../components';
import data from '../data/home_data';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <Header />}
        ListHeaderComponentStyle={styles.header}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <AlbumCategory title={item.title} albumsList={item.albumsList} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  category: {
    marginVertical: 10,
  },
});
