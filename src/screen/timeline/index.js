import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
/* Component */
import {BackgroundHeader, TopNavigation} from '../../component';
import {COLORS, SIZES} from '../../utils/theme';
/* --------- */

const time = [
  '--:--',
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
  '21:00',
];
const timeHour = (hour) => {
  var timeH, i;
  for (i = 0; i < time.length; i++) {
    var timeH = time[hour];
  }
  return timeH;
};
const TimeLine = ({route}) => {
  const {information} = route.params;
  const URL_API = `http://45.119.212.43/api/student/${information.studentCode}`;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.timetable);
        console.log(json.timeTable);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <TopNavigation title="Thời khóa biểu" backBtn />
      <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={styles}>
                    <View style={styles.obj}>
                      <Text style={styles.dayofweek}>{item.dayOfWeekVi}</Text>
                      <View style={styles.row}>
                        <View style={styles.timing}>
                          <Text style={styles.ttt}>
                            {timeHour(item.timeStart)}
                          </Text>
                          <Text style={styles.ttt}>
                            {timeHour(item.timeStop + 1)}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.textSubject} numberOfLines={2}>
                            {item.subjectName}
                          </Text>
                          <Text style={styles.ttt}>
                            {item.roomName} - {item.teacherName}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
      </View>
    </>
  );
};
export default TimeLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
  },
  list: {
    flex: 1,
    padding: 20,
  },
  obj: {
    marginVertical: 5,
    width: SIZES.width,
  },
  dayofweek: {
    color: COLORS.lightGray,
    fontSize: 16,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: 5,
  },
  ttt: {
    paddingVertical: 2,
    fontSize: 15,
  },
  timing: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: 70,
    justifyContent: 'center',
  },
  textSubject: {
    flex: 1,
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 0,
  },
});
