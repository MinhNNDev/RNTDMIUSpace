import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackgroundHeader, InputValue, TextGradient} from '../../component';

import LinearGradient from 'react-native-linear-gradient';

import {Styles} from '../../utils/Styles';
import {COLORS} from '../../utils/theme';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [id, setID] = useState('');
  const [Password, setPassword] = useState('');

  const [tab, setTab] = React.useState(0);
  return (
    <>
      <View>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Home', {id})}
          style={styles.btnTouch}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#283048', '#616161']}
            style={styles.linearBtn}>
            <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
