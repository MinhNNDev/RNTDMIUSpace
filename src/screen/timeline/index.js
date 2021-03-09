import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
/* Component */
import {BackgroundHeader, TopNavigation} from '../../component';

import {COLORS, SIZES} from '../../utils/theme';
import {currentDay, dayInWeek} from '../../utils/supportData/date';
/* --------- */

const time = [
  '07:00',
  '07:50',
  '09:00',
  '09:50',
  '10:40',
  '12:30',
  '13:20',
  '14:30',
  '15:20',
  '16:10',
  '17:30',
  '18:20',
  '19:30',
  '20:20',
];

const TimeLine = ({navigation, route}) => {
  const {information} = route.params;
  const URL_API = `http://45.119.212.43:5000/api/schedule/${information.studentCode}`;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.timeTable);
        console.log(json.timeTable);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [URL_API]);

  var dayz = dayInWeek();
  var daysEN = dayz.getDayInWeek;
  var daysVN = dayz.getThu;

  return (
    <View style={styles.container}>
      <TopNavigation title="Thời khóa biểu" backBtn />
      <View style={styles.main}>
        <View style={styles}>
          <View>
            <Text style={styles.nameMember}>{information.name}</Text>
            <Text style={styles.nameMember}>{information.studentCode}</Text>
            <Text style={styles.nameMember}>{information.major}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>{daysVN}</Text>
            <ScrollView>
              <FlatList
                data={data.friday}
                keyExtractor={(item) => item.studentCode}
                renderItem={({item}) => (
                  <View>
                    <View style={styles}>
                      <View style={styles}>
                        <Text style={styles.ttt}>{item.classroom}</Text>
                      </View>
                      <View style={styles}>
                        <Text style={styles.ttt}>{item.subject}</Text>
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
          </View>
        </View>
      </View>
    </View>
  );
};
export default TimeLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
