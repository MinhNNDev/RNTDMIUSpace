import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthScreen from '../../screen/auth';
import HomeScreen from '../../screen/home';
import ProfileScreen from '../../screen/profile';
import NewsScreens from '../../screen/news';
import DetailScreens from '../../screen/detail';
import ExtendScreens from '../../screen/extend';
import TableTimesScreen from '../../screen/timeline';
import AboutScreen from '../../screen/about';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={NewsScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Extend"
        component={ExtendScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Timeline"
        component={TableTimesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AppContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
