import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const IconGroup = ({icon, title}) => {
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome name={icon} size={30} color="#174A91" />
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
          <IconGroup icon="card" title="Thẻ SV" />
          <IconGroup icon="list-alt" title="TKB" />
          <IconGroup icon="server" title="Điểm" />
          <IconGroup icon="newspaper-o" title="Tin tức" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuTb: {
    position: 'absolute',
    width: 350,
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 22,
    marginHorizontal: screenWidth / 17,
    marginTop: 90,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 22,
    elevation: 11,
    flexDirection: 'column',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  txtIcon: {
    fontSize: 14,
    marginTop: 3,
  },
  stIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
