import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES} from '../../utils/theme';
import {Styles} from '../../utils/Styles';
import {TextGradient, TopNavigation} from '../../component';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.flex}>
      <TopNavigation title="Thông tin" backBtn />
      <View style={styles.container}>
        <View>
          <View style={styles.top}>
            <TextGradient style={styles.name}>
              TDMU Information Space
            </TextGradient>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.title}>Tài khoản:</Text>
            <Text style={styles.content}>MSSV</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.title}>Đối tượng :</Text>
            <Text style={styles.content}>Sinh viên</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.title}>Website:</Text>
            <Text style={styles.content}>https://dkmh.tdmu.edu.vn</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.title}>Version:</Text>
            <Text style={styles.content}>1.2.5</Text>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text style={Styles.textAlign}>All Rights reserved.</Text>
          <Text style={Styles.textAlign}>Copyright © 2021 MinhNNdev</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  top: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  tinyLogo: {
    width: 80,
    height: 70,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7f7b7b',
  },
  copyright: {
    paddingBottom: 20,
  },
});
