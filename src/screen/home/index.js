import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/* Component */
import {BackgroundHeader, News} from '../../component';
import {COLORS} from '../../utils/theme';
import {currentDay, dayInWeek} from '../../utils/supportData/date';
/* --------- */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Users} from '../../common/database/model/users';
import {useFocusEffect} from '@react-navigation/core';
import {UserContext} from '../../common/context/UserContext';

const {width, height} = Dimensions.get('window');

const IconGroup = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.touch} onPress={props.onPress}>
        <FontAwesome name={props.icon} size={29} color="#174A91" />
        <Text style={styles.txtIcon}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

let backCount = 0;
const HomeScreen = ({navigation}) => {
  const uContext = useContext(UserContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [information, setInfomation] = useState([]);
  const [timetableToday, setTimetableToday] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (backCount == 0) {
          backCount++;
          ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
          setTimeout(() => {
            backCount = 0;
          }, 2000);
          return true;
        }
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  const URL_API = `http://45.119.212.43:5000/api/schedule/${uContext.data.username}`;

  var dayz = dayInWeek();
  var daysEN = dayz.getDayInWeek;
  var daysVN = dayz.getThu;

  const FecthData = () => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.timeTable);
        setInfomation(json.information);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    FecthData();
  }, []);

  return (
    <View style={styles.container}>
      <BackgroundHeader height={(height / 100) * 26} width={width} />
      <View style={styles.mainView}>
        <View style={styles.viewMember}>
          <View>
            <Text style={styles.nameMember}>Xin chào,</Text>
            <Text style={styles.nameMember}>{information.name}</Text>
            <Text style={styles.date}>
              Hôm nay, {daysVN} ngày {currentDay()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', {information})}>
            <Image
              source={require('../../assets/img/blank.png')}
              style={styles.imageMember}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuTb}>
        <View style={styles.iconGroup}>
          <IconGroup
            icon="id-card"
            title="Thẻ SV"
            onPress={() => navigation.navigate('CardId', {information})}
          />
          <IconGroup
            icon="list-alt"
            title=" TKB "
            onPress={() => navigation.navigate('Timeline', {information})}
          />
          <IconGroup
            icon="newspaper-o"
            title="Tin tức"
            onPress={() => navigation.navigate('News')}
          />
          <IconGroup
            icon="navicon"
            title="Khác"
            onPress={() => navigation.navigate('Extend', {information})}
          />
        </View>
      </View>

      <View style={styles.bodyScreen}>
        <View>
          <Text style={styles.title}>Lịch học hôm nay</Text>
          <ScrollView>
            <FlatList
              data={data[daysEN]}
              keyExtractor={(item) => item.classroom + item.start}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 10,
                  }}>
                  <View style={styles.calcuView}>
                    <View style={styles.roomView}>
                      <Text style={styles.roomTxt}>{item.classroom}</Text>
                    </View>
                    <View style={styles.detailCal}>
                      <Text style={styles.nameSubject}>{item.subject}</Text>
                      <Text>
                        Tiết: {item.start} đến {item.end}
                      </Text>
                      <Text>{item.teacher}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </ScrollView>
          <Text style={styles.title}>Tin tức</Text>
        </View>
        <News />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    position: 'absolute',
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: '#001242',
    fontWeight: 'bold',
  },
  viewMember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
  },
  nameSubject: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  nameMember: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imageMember: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#fff9',
    marginLeft: 40,
  },
  bodyScreen: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 5,
  },
  roomView: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
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
    fontSize: 16,
    color: '#001242',
    fontWeight: '700',
  },
  //---------------TABS----------------//
  menuTb: {
    width: width - 40,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 11,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -40,
  },
  touch: {
    alignItems: 'center',
    width: 50,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  txtIcon: {
    fontSize: 12,
    marginTop: 3,
  },
  //---------------FLATLIST_NEWS----------------//
  viewImgTitNews: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
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
