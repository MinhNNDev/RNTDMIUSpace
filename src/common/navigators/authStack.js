import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../../screen/auth/login';
import SignUpScreen from '../../screen/auth/register';

const authStack = createStackNavigator();

const AuthStack = () => {
  return (
    <authStack.Navigator>
      <authStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </authStack.Navigator>
  );
};
const AuthContainer = () => {
  return <AuthStack />;
};

export default AuthContainer;
