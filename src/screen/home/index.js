import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
/* Component */
import BackgroundHeader from '../../component/BackgroundHeader';
import MainMenu from '../../component/MainMenu';
/* --------- */

import {URL} from '../../api/config';

const w = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundHeader height={170} width={w} />
      <View style={styles.mainView}>
        <View style={styles.viewMember}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/img/minhdev.jpg')}
              style={styles.imageMember}
            />
          </TouchableOpacity>
          <View style={styles.dataMember}>
            <Text style={styles.nameMember}>Hi, Nguyen Ngoc Minh</Text>
            <Text style={[styles.nameMember, styles.mssvMember]}>
              MSSV : 1824801030015
            </Text>
          </View>
        </View>
        <MainMenu />
      </View>

      <View style={styles.bodyScreen}>
        <View>
          <Text style={styles.txtLichHoc}>Lịch học hôm nay</Text>
          <View style={styles.calcuView}>
            <View style={styles.roomView}>
              <Text style={styles.roomTxt}>C2.103-3</Text>
            </View>
            <View style={styles.detailCal}>
              <Text style={styles.nameMember}>Thiết kế Web (1+1)</Text>
              <Text>7:00 - 11:30 ( Tiết 1 - 5 )</Text>
              <Text>T.B.M.Sơn</Text>
            </View>
          </View>
          <View style={styles.calcuView}>
            <View style={styles.roomView}>
              <Text style={styles.roomTxt}>B-302</Text>
            </View>
            <View style={styles.detailCal}>
              <Text style={styles.nameMember}>Hệ quản trị cơ sở dữ liệu</Text>
              <Text>14:30 - 16:30 ( Tiết 8 - 10 )</Text>
              <Text>T.V.Tài</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.txtNews}>Tin tức</Text>
          <ScrollView>
            {/* <FlatList
              data={this.state.news}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.touView}>
                      <Image
                        source={{uri: encodeURI(URL.linkSchool) + item.img}}
                        style={styles.ImageNews}
                        resizeMode="cover"
                      />
                      <View style={styles.mergView}>
                        <Text numberOfLines={2} style={styles.newsTitle}>
                          {item.name}
                        </Text>
                        <Text numberOfLines={2}>
                          {item.desc.substring(0, 60)}...
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            /> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    position: 'absolute',
  },
  viewMember: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
  },
  nameMember: {
    fontSize: 16,
    color: '#001242',
    fontWeight: 'bold',
  },
  mssvMember: {
    fontSize: 13,
  },
  imageMember: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#fff9',
  },
  dataMember: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  bodyScreen: {
    marginHorizontal: 15,
    marginTop: 5,
  },
  txtLichHoc: {
    marginTop: 80,
    fontSize: 17,
    color: '#001242',
    fontWeight: 'bold',
  },
  roomView: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#002B66',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roomTxt: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  calcuView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailCal: {
    marginLeft: 11,
  },
  txtNews: {
    marginTop: 5,
    fontSize: 17,
    color: '#001242',
    fontWeight: 'bold',
  },
  ImageNews: {
    width: 78,
    height: 65,
    borderRadius: 3,
    marginRight: 10,
  },
  touView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mergView: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 6,
  },
  newsTitle: {
    fontSize: 14,
    color: '#001242',
    fontWeight: 'bold',
  },
});
