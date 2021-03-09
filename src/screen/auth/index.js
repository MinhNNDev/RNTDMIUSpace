import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BackgroundHeader from '../../component/BackgroundHeader';
import InputValue from '../../component/InputValue';
import LinearGradient from 'react-native-linear-gradient';
import TextGradient from '../../component/TextGradient';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <BackgroundHeader height={height} width={width} />
      <View style={styles.container}>
        <View style={styles.mainLogin}>
          <TextGradient style={styles.txtLogo}>INFORMARTION SPACE</TextGradient>
          <Text style={styles.txtLogin}> Đăng nhập </Text>
          <InputValue title="MSSV" icon="user" />
          <InputValue title="Mật khẩu" icon="lock" isPassword />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.btnTouch}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#283048', '#616161']}
                style={styles.linearBtn}>
                <Text style={styles.txtBtnLogin}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
  },
  mainLogin: {
    marginHorizontal: 20,
  },
  txtLogo: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 25,
  },
  txtLogin: {
    marginVertical: 20,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtInput: {
    backgroundColor: '#FFFF',
    width: 320,
    height: 45,
    marginHorizontal: 35,
    marginVertical: 8,
    borderRadius: 5,
    fontSize: 15,
  },
  btnTouch: {
    flex: 1,
    alignItems: 'center',
  },
  linearBtn: {
    borderRadius: 5,
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginVertical: 30,
  },
  txtBtnLogin: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
  },
});
