import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackgroundHeader, InputValue, TextGradient} from '../../component';

import LinearGradient from 'react-native-linear-gradient';

import {Styles} from '../../utils/Styles';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [id, setID] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <BackgroundHeader height={height} width={width} />
      <View style={styles.container}>
        <TextGradient style={styles.txtLogo}>INFORMARTION SPACE</TextGradient>
        <View>
          <Text style={styles.txtLogin}> Đăng nhập </Text>
          <InputValue
            title="MSSV"
            icon="user"
            onChangeText={(username) => setID(username)}
            value={id}
          />
          <InputValue
            title="Mật khẩu"
            icon="lock"
            onChangeText={(password) => setPassword(password)}
            value={Password}
            isPassword
          />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home', {id})}
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
        <View style={styles.copyright}>
          <Text style={Styles.textAlign}>All Rights reserved.</Text>
          <Text style={Styles.textAlign}>Copyright © 2021 MinhNNdev</Text>
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
    marginHorizontal: 30,
  },
  mainLogin: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  txtLogo: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 25,
  },
  txtLogin: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 25,
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
  copyright: {
    bottom: -220,
  },
});
