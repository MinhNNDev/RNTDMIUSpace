import React, {useState, useEffect} from 'react';
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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [timetableToday, setTimetableToday] = useState([]);

  useEffect(() => {
    fetch('http://45.119.212.43:3000/api/student/1824801030015')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTimetableToday(
          json.timetable.filter((s) => s.dayOfWeek === new Date().getDay()),
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

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
            <Text style={styles.nameMember}>Hi, {data.studentInfo.name}</Text>
            <Text style={[styles.nameMember, styles.mssvMember]}>
              MSSV : {data.studentInfo.id}
            </Text>
          </View>
        </View>
        <MainMenu />
      </View>

      <View style={styles.bodyScreen}>
        <View>
          <Text style={styles.txtLichHoc}>Lịch học hôm nay</Text>
          <ScrollView>
            <FlatList
              data={timetableToday}
              keyExtractor={(item) => item.classroom + item.start}
              renderItem={({item}) => (
                <View>
                  <View style={styles.calcuView}>
                    <View style={styles.roomView}>
                      <Text style={styles.roomTxt}>{item.roomName}</Text>
                    </View>
                    <View style={styles.detailCal}>
                      <Text style={styles.nameMember}>{item.subjectName}</Text>
                      <Text>
                        Tiết: {item.timeStart} đến {item.timeStop}
                      </Text>
                      <Text>{item.teacherName}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.txtNews}>Tin tức</Text>
          <Text />
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
