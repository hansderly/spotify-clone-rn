/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Head } from '../components';
import RecentActivitiesCategory from './RecentActivitiesCategory';

const Header = () => {
  return (
    <View>
      <Head />
      {/* <ActionRow />
      <MusicItem /> */}
      <RecentActivitiesCategory />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
