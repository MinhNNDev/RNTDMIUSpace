import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {BackgroundHeader, TopNavigation, TextGradient} from '../../component';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../utils/theme';
import {Styles} from '../../utils/Styles';

const CardID = ({route}) => {
  const {information} = route.params;
  const data = {
    serial: '1234 5687 9564 2710',
    end: '1/26',
  };
  return (
    <>
      <TopNavigation title="Thẻ sinh viên" backBtn />
      <View style={styles.container}>
        <LinearGradient
          style={styles.card}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#525252', '#3d72b4']}>
          <View style={styles.line} />
          <View style={[styles.line, styles.linePos1]} />
          <View style={[styles.line, styles.linePos2]} />
          <View style={styles.content}>
            <View style={styles.numchip}>
              <View />
              <Image
                source={require('../../assets/img/logobidv.png')}
                style={styles.logo}
              />
            </View>
            <Image
              source={require('../../assets/img/techchip.png')}
              style={styles.chip}
            />
            <View style={styles.numchip}>
              <Text style={styles.numberCard}>
                {'****    ****    ****   ' +
                  information.studentCode.substr(9, 4)}
              </Text>
            </View>
            <Text style={styles.textColor}>Valid Date</Text>
            <Text style={styles.textColor}>{data.end}</Text>
            <View style={styles.numchip}>
              <Text style={styles.textColor}>{information.name}</Text>
              <Image
                source={require('../../assets/img/napas.png')}
                style={styles.napas}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default CardID;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    width: SIZES.width - 20,
    height: 220,
    borderRadius: 10,
  },
  topBg: {
    position: 'absolute',
    marginTop: 0,
    width: SIZES.width,
    height: (SIZES.height / 100) * 25,
  },
  line: {
    position: 'absolute',
    height: SIZES.height,
    width: 45,
    top: -300,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: [
      {
        rotate: '45deg',
      },
    ],
    borderRadius: 3,
  },
  linePos1: {
    top: -120,
    left: 50,
  },
  linePos2: {
    top: -150,
    left: 50,
  },
  content: {
    margin: 10,
    marginLeft: 20,
  },
  logo: {
    width: 90,
    height: 32,
  },
  chip: {
    marginVertical: 10,
    width: 46,
    height: 37,
  },
  napas: {
    width: 90,
    height: 28,
    margin: 10,
  },
  numchip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textColor: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  numberCard: {
    color: COLORS.white,
    fontSize: 24,
  },
});
