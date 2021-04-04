import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../utils/theme';
import {Styles} from '../../utils/Styles';

import {TopNavigation} from '../../component';

const Support = () => {
  return (
    <View style={Styles.container}>
      <TopNavigation title="Hỗ trợ" backBtn />
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={[styles.content, styles.txtColor, styles.txtAlign]}>
            Trung tâm hỗ trợ
          </Text>
          <Text style={[styles.title, styles.txtAlign]}>
            Xin chào, tôi có thể giúp gì cho bạn ?
          </Text>
        </View>
        <View>
          <Text style={[styles.title, styles.txtAlign]}>Vấn đề phổ biến</Text>
          <Text style={styles.block}>Tạo tài khoản</Text>
          <Text style={styles.block}>Quên mật khẩu</Text>
          <Text style={styles.block}>Đổi mật khẩu</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.description}>
            Troubleshooting other, you can send to Email
          </Text>
          <Text style={styles.email}>Email: nnminhcontact@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    backgroundColor: COLORS.white,
    padding: 30,
  },
  block: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    padding: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
    color: COLORS.lightGray,
    fontWeight: '700',
    fontSize: 18,
  },
  txtAlign: {
    textAlign: 'center',
  },
  txtColor: {
    color: COLORS.secondary,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  content: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  email: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
  },
});
