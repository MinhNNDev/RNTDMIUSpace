import React from 'react';
import {StyleSheet, View} from 'react-native';

import {News, TopNavigation} from '../../component';

const ListNews = () => {
  return (
    <View style={styles.container}>
      <TopNavigation title="Tin tức" backBtn />
      <News />
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
