import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BackgroundHeader from '../../component/BackgroundHeader';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <BackgroundHeader height={height} width={width} />
      <View style={styles.container}>
        <View style={styles.mainLogin}>
        <Text style={styles.txtLogin}> INFORMARTION SPACE </Text>
          <Text style={styles.txtLogin}> Đăng nhập </Text>
          <View>
            <TextInput placeholder="Username" style={styles.txtInput} />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.txtInput}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.btnTouch}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#001f45', '#45003d']}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  txtLogin: {
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
