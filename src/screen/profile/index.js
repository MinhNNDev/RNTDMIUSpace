import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
const w = Dimensions.get('window').width;

const profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewMember}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/img/minhdev.jpg')}
            style={styles.imageMember}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dataMember}>
        <Text style={styles.nameMember}>Nguyen Ngoc Minh</Text>
        <Text style={[styles.nameMember, styles.mssvMember]}>
          MSSV : 1824801030015
        </Text>
        <Text style={[styles.nameMember, styles.mssvMember]}>
          Ngày sinh: 27/10/2000
        </Text>
        <Text style={[styles.nameMember, styles.mssvMember]}>
          Khoa: Viện Kĩ thuật Công Nghệ
        </Text>
        <Text style={[styles.nameMember, styles.mssvMember]}>
          Ngành: Kĩ thuật Phần mềm
        </Text>
        <Text style={[styles.nameMember, styles.mssvMember]}>Lớp: D18PM01</Text>
      </View>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.txtBtn}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: '#fff'},
  viewMember: {
    marginTop: 20,
  },
  nameMember: {
    fontSize: 16,
    color: '#001242',
    fontWeight: 'bold',
  },
  txtBtn: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
  },
  mssvMember: {
    fontSize: 13,
  },
  imageMember: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff9',
  },
  dataMember: {
    flexDirection: 'column',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: w,
    paddingVertical: 12,
    backgroundColor: '#fff',
    bottom: -200,
    borderWidth: 0.5,
  },
});
