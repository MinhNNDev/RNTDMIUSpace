import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {TopNavigation} from '../../component';

const w = Dimensions.get('window').width;

const Profile = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {information} = route.params;
  const URL_API = `http://45.119.212.43:5000/api/schedule/${information.studentCode}`;

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.information);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <TopNavigation title="Tài khoản" backBtn />
      <View style={styles.viewMember}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/img/minhdev.jpg')}
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
            {data.name}
          </Text>
        </View>
        <View style={styles.infoBar}>
          <Text style={[styles.nameMember, styles.mssvMember]}>MSSV:</Text>
          <Text style={[styles.nameMember, styles.mssvMember]}>
            {data.studentCode}
          </Text>
        </View>
        <View style={styles.infoBar}>
          <Text style={[styles.nameMember, styles.mssvMember]}>Ngày sinh:</Text>
          <Text style={[styles.nameMember, styles.mssvMember]}>
            {data.dateOfBirth}
          </Text>
        </View>
        <View style={styles.infoBar}>
          <Text style={[styles.nameMember, styles.mssvMember]}>Lớp:</Text>
          <Text style={[styles.nameMember, styles.mssvMember]}>
            {data.class}
          </Text>
        </View>
        <View style={styles.infoBar}>
          <Text style={[styles.nameMember, styles.mssvMember]}>Ngành học:</Text>
          <Text style={[styles.nameMember, styles.mssvMember]}>
            {data.major}
          </Text>
        </View>
        <View style={styles.infoBar}>
          <Text style={[styles.nameMember, styles.mssvMember]}>Khoa:</Text>
          <Text style={[styles.nameMember, styles.mssvMember]}>
            {data.facutly}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.txtBtn}>Đổi tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {marginTop: 10}]}
        onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.txtBtn}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1},
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
    bottom: -200,
    //borderWidth: 0.5,
    borderColor: '#737373',
  },
});
