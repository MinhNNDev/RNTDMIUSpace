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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {BackgroundHeader, InputValue, TextGradient} from '../../component';

// import {AuthContext} from '../../common/context/context';
import Users from '../../common/database/model/users';

import {Styles} from '../../utils/Styles';
import {COLORS} from '../../utils/theme';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
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
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const [id, setID] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <>
      <BackgroundHeader height={height} width={width} style={styles.position} />
      <View style={styles.container}>
        <View>
          <TextGradient style={styles.txtLogo}>INFORMATION</TextGradient>
          <TextGradient style={styles.txtLogo}>S P Λ C Ξ</TextGradient>
          <Text style={styles.txtLogin}>Đăng kí</Text>
          <View>
            <View>
              <View>
                <InputValue
                  title="MSSV"
                  icon="user"
                  onChangeText={(username) => textInputChange(username)}
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
              </View>
              <View>
                <InputValue
                  title="Nhập lại mật khẩu"
                  icon="lock"
                  onChangeText={(confirm_password) =>
                    handleConfirmPasswordChange(confirm_password)
                  }
                  isPassword
                />
              </View>
              <TouchableOpacity style={styles.btnTouch}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#283048', '#616161']}
                  style={styles.linearBtn}>
                  <Text style={styles.txtBtn}>Đăng kí</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.txtBtn}>
              <Text style={styles.txtBtn}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
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
