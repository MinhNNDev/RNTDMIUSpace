import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../utils/theme';
import {Styles} from '../../utils/Styles';

import {TextGradient, TopNavigation} from '../../component';

const PrivacyPolicy = () => {
  return (
    <Text style={styles.text}>
      Mọi thông tin về tài khoản đều được bảo mật, dữ liệu được truy xuất dựa
      trên website: https://dkmh.tdmu.edu.vn từ Mã số sinh viên và Mật khẩu mà
      bạn đã cung cấp, ngoài ra ứng dụng không có quyền, thực hiện các hành động
      nào khác liên quan đến website, liên quan đến tài khoản của bạn.
    </Text>
  );
};

const Privacy = () => {
  return (
    <View style={Styles.container}>
      <TopNavigation title="Điều khoản sử dụng" backBtn />
      <ScrollView>
        <View style={styles.main}>
          <PrivacyPolicy />
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
  },
});
