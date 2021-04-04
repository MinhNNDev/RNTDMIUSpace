// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './common/navigators/mainStack';

import {fcmService} from './services/notification/FCMservice';
import {localNotificationService} from './services/notification/LocalNotificationService';
import {UserProvider} from './common/context/UserContext';

const App = () => {
  useEffect(() => {
    //=========React-Native_Firebase_FCM==============/
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister: ', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification: ', notify);
      const options = {
        soundName: 'default',
        playSound: true, //,
        // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
        // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotification: ', notify);
      // eslint-disable-next-line no-alert
      alert('Open Notification: ' + notify.body);
    }

    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
