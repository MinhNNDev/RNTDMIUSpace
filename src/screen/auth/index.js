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
      <BackgroundHeader height={height} width={width} style={styles.position} />
      <View style={styles.container}>
        <View>
          <Text style={styles.txtLogo}>Information Space</Text>
          <Text style={styles.txtLogin}>
            {tab === 0 ? 'Đăng nhập' : 'Đăng kí'}
          </Text>
          <View>
            {tab === 0 && (
              <View>
                <InputValue
                  title="MSSV"
                  icon="user"
                  keyboardType="numeric"
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
                    <Text style={styles.txtBtn}>Đăng nhập</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
            {tab === 1 && (
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
                <InputValue
                  title="Nhập lại mật khẩu"
                  icon="lock"
                  onChangeText={(password) => setPassword(password)}
                  value={Password}
                  isPassword
                />
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
            )}
            <TouchableOpacity
              onPress={() => (tab === 1 ? setTab(0) : setTab(1))}
              style={styles.txtBtn}>
              <Text style={styles.txtBtn}>
                {tab === 1 ? 'Login' : 'Register'}
              </Text>
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
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 15,
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
});
