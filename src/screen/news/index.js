import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {COLORS} from '../../utils/theme';

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
  viewNews: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  txtNews: {
    fontSize: 16,
    color: '#001242',
    fontWeight: '700',
  },
  viewImgTitNews: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 3,
  },
  imgNewsProject: {
    width: 120,
    height: 70,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  titledesc: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  textTitleNews: {
    fontSize: 14,
  },
});
