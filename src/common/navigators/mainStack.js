import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../../screen/auth/login';
import SignUpScreen from '../../screen/auth/register';

import HomeScreen from '../../screen/home';
import ProfileScreen from '../../screen/profile';
import CardScreen from '../../screen/card';
import NewsScreens from '../../screen/news';
import DetailScreens from '../../screen/detail';
import ExtendScreens from '../../screen/extend';
import TableTimesScreen from '../../screen/timeline';
import AboutScreen from '../../screen/about';

import PrivacyScreen from '../../screen/extend/PrivacyScreen';
import SettingScreen from '../../screen/extend/SettingScreen';
import SupportScreen from '../../screen/extend/SupportScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardId"
        component={CardScreen}
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
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppContainer;
