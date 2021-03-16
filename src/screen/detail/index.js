import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HTML from 'react-native-render-html';

import TopNavigation from '../../component/TopNavigation';
import {BANNER_H, COLORS} from '../../utils/theme';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const w = Dimensions.get('window').width;

class Detail extends Component {
  constructor(props) {
    super(props);
    const {item} = props;
    this.state = {
      scrollA: new Animated.Value(0),
      detail: {...item},
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const {item} = this.props.route.params;
    //console.log(item);

    fetch(
      encodeURI(
        `http://45.119.212.43/api/news/${item.cat_name}|${item.id_name}`,
      ),
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({detail: response});
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  render() {
    const {item} = this.props.route.params;
    const {detail} = this.state;
    var dataContent = entities.decode(detail.content);
    return (
      <SafeAreaView style={styles.screen}>
        <TopNavigation title="Chi tiết" scrollA={this.state.scrollA} backBtn />
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollA}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={12}>
          <View style={styleA.bannerContainer}>
            <Animated.Image
              source={{uri: item.img}}
              style={styleA.banner(this.state.scrollA)}
              resizeMode="cover"
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.styleViewTime}>
              <View style={styles.layoutViewTime}>
                <FontAwesome5 name="calendar-day" size={11} />
                <Text style={styles.ViewAndTime}> {item.time}</Text>
              </View>
              <View style={styles.layoutViewTime}>
                <FontAwesome5 name="eye" size={11} />
                <Text style={styles.ViewAndTime}> {item.view}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <HTML
                html={dataContent}
                tagsStyles={{
                  p: styles.contentTagP,
                  li: styles.contentTagLi,
                  a: styles.contentTagP,
                }}
                ignoredStyles={['height', 'width']}
              />
            </View>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

export default Detail;

const styleA = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: (scrollA) => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#fff'},
  imgHeader: {
    width: w,
    height: 270,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  styleViewTime: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutViewTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchcount: {
    fontSize: 9,
  },
  ViewAndTime: {
    fontSize: 12,
  },
  contentTagP: {
    fontSize: 14,
  },
  contentTagLi: {
    fontSize: 14,
  },
  contentTagSt: {
    fontSize: 14,
  },
});
