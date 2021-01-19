import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const IconGroup = ({icon, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.touch}>
        <FontAwesome name={icon} size={32} color="#174A91" />
        <Text style={styles.txtIcon}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.menuTb}>
        <View style={styles.iconGroup}>
          <IconGroup icon="id-card" title="Thẻ SV" />
          <IconGroup icon="list-alt" title=" TKB " />
          <IconGroup icon="server" title="Điểm" />
          <IconGroup icon="bell-o" title="Tbáo" />
        </View>
        <View style={styles.iconGroup}>
          <IconGroup icon="signal" title=" CTĐT" />
          <IconGroup icon="calendar" title="Lịch thi" />
          <IconGroup icon="newspaper-o" title="Tin tức" />
          <IconGroup icon="bars" title=" Khác " />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuTb: {
    position: 'absolute',
    width: width - 40,
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 22,
    marginHorizontal: 20,
    marginTop: 90,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 22,
    elevation: 11,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  touch: {
    alignItems: 'center',
    width: 50,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  txtIcon: {
    fontSize: 12,
    marginTop: 3,
  },
});
