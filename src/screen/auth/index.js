import React, {Component} from 'react';
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

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <BackgroundHeader height={height} width={width} />
        <View style={styles.container}>
          <View style={styles.mainLogin}>
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
              <TouchableOpacity style={styles.btnTouch}>
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
  }
}

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
    height: 50,
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
    borderRadius: 27,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: 200,
  },
  txtBtnLogin: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
  },
});
