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
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {COLORS, SIZES} from '../../utils/theme';
import {Styles} from '../../utils/Styles';
import {URL} from '../../api/config';

import {TextGradient, TopNavigation} from '../../component';

const News = () => {
  const [dataNews, setDataNews] = useState([]);
  const [dataEvent, setEvent] = useState([]);
  const [isLoading, setLoading] = useState(true);

  fetch(URL.linkFetchData)
    .then((response) => response.json())
    .then((json) => {
      setDataNews(json);
    })
    .catch((err) => {
      console.log(err);
    }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNavigation title="Tin tức" backBtn />
      <View style={styles.viewNews}>
        <FlatList
          data={dataNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {item})}>
                <View style={styles.viewImgTitNews}>
                  <Image
                    source={{uri: item.img}}
                    style={styles.imgNewsProject}
                    resizeMode="cover"
                  />
                  <View style={styles.titledesc}>
                    <Text style={styles.txtNews} numberOfLines={2}>
                      {item.name || item.title}
                    </Text>
                    <Text style={styles.textTitleNews} numberOfLines={2}>
                      {item.desc.substring(0, 60)}...
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default News;

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
