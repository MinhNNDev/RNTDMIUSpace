import React, {useState, useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {BackgroundHeader, InputValue, TextGradient} from '../../component';

import {UserContext} from '../../common/context/UserContext';
import {Users} from '../../common/database/model/users';

import {Styles} from '../../utils/Styles';
import {COLORS} from '../../utils/theme';

import {Users as UserDB} from '../../common/database/model/users';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const uContext = useContext(UserContext);
  const [data, setData] = useState({
    id: '',
    username: '',
    password: '',
    check_textInputChange: false,
    isValidUser: true,
    isValidPassword: true,
    confirm_password: '',
    confirm_secureTextEntry: true,
  });

  // const {signIn} = useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        id: val,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        id: val,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const login = () => {
    console.log('Something login' + data.username + ' ' + data.password);

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Lỗi khi nhập!',
        'Tài khoản hoặc mật khẩu không được bỏ trống.',
        [{text: 'Ok'}],
      );
      return;
    }

    let existUserDB = UserDB.findIndex(
      (item) =>
        item.username === data.username && item.password === data.password,
    );
    if (existUserDB >= 0) {
      let dataFM = {
        id: data.id,
        username: data.username,
        password: data.password,
      };
      uContext.setData(dataFM);
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Thông tin sai!',
        'Tài khoản hoặc mật khẩu không chính xác.',
        [{text: 'Ok'}],
      );
    }
  };

  const loginHandle = (userName, passWord) => {
    const foundUser = Users.filter((item) => {
      return userName === item.username && passWord === item.password;
    });

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Ok'}],
      );
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Ok'},
      ]);
      return;
    }
    // signIn(foundUser);
  };

  return (
    <>
      <BackgroundHeader height={height} width={width} style={styles.position} />
      <View style={styles.container}>
        <Animatable.View>
          <TextGradient style={styles.txtLogo}>INFORMATION</TextGradient>
          <TextGradient style={styles.txtLogo}>S P Λ C Ξ</TextGradient>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
          <View>
            <View>
              <View>
                <InputValue
                  title="MSSV"
                  icon="user"
                  // keyboardType="numeric"/
                  onChangeText={(username) => textInputChange(username)}
                  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
                {data.isValidUser ? null : (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>
                      Tên người dùng phải dài 4 ký tự.
                    </Text>
                  </Animatable.View>
                )}
              </View>
              <View>
                <InputValue
                  title="Mật khẩu"
                  icon="lock"
                  onChangeText={(password) => handlePasswordChange(password)}
                  isPassword
                />
                {data.isValidPassword ? null : (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>
                      Mật khẩu phải dài hơn 6 kí tự
                    </Text>
                  </Animatable.View>
                )}
              </View>
              <TouchableOpacity onPress={login} style={styles.btnTouch}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#283048', '#616161']}
                  style={styles.linearBtn}>
                  <Text style={styles.txtBtn}>Đăng nhập</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={styles.txtBtn}>
              <Text style={styles.txtBtn}>Đăng kí</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <View>
          <Text style={Styles.textAlign}>All Rights reserved.</Text>
          <Text style={Styles.textAlign}>Copyright © 2021 MinhNNdev</Text>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  position: {
    position: 'absolute',
  },
  txtLogo: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.gradientEnd,
    textTransform: 'uppercase',
  },
  txtLogin: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
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
    alignItems: 'center',
  },
  linearBtn: {
    borderRadius: 5,
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginVertical: 30,
  },
  txtBtn: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
  },
  errorMsg: {
    color: 'red',
  },
});
