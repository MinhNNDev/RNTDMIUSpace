import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {AuthContext} from '../../common/context/context';
import {TopNavigation} from '../../component';

const w = Dimensions.get('window').width;

const Profile = ({navigation, route}) => {
  const {signOut} = useContext(AuthContext);

  const {information} = route.params;
  return (
    <>
      <TopNavigation title="Tài khoản" backBtn />
      <View style={styles.container}>
        <View>
          <View style={styles.viewMember}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/img/blank.png')}
                style={styles.imageMember}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewInfo}>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                Họ tên Sinh viên:
              </Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.name}
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>MSSV:</Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.studentCode}
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                Ngày sinh:
              </Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.dateOfBirth}
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>Lớp:</Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.class}
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                Ngành học:
              </Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.major}
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={[styles.nameMember, styles.mssvMember]}>Khoa:</Text>
              <Text style={[styles.nameMember, styles.mssvMember]}>
                {information.facutly}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.btn, {marginTop: 10}]}
          onPress={() => {
            signOut();
          }}>
          <Text style={styles.txtBtn}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  viewMember: {
    width: w,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewInfo: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  nameMember: {
    fontSize: 18,
    color: '#001242',
    fontWeight: 'bold',
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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
    borderColor: '#737373',
  },
  txtBtn: {
    paddingVertical: 10,
  },
});
