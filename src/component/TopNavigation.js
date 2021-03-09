import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {TOPNAVI_H, BANNER_H, COLORS} from '../utils/theme';

const TopNavigation = (props) => {
  const safeArea = useSafeArea();

  const {title, scrollA} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  const navigation = useNavigation();

  return (
    <>
      {/* <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      /> */}
      <View>
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <View style={Styles.header}>
            {props.backBtn && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.postisionBack}>
                <AntDesign name="arrowleft" size={23} color="#001f45" />
              </TouchableOpacity>
            )}
            <Text style={styles.title(isTransparent)}>{title}</Text>
            <View style={Styles.null} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: (isTransparent) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: isTransparent ? '#FFF' : '#000',
  }),
};

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  null: {
    width: 32,
  },
});

export default TopNavigation;
