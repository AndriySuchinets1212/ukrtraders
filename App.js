import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  StatusBar
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import MainNavigation from './src/navigation/MainNavigation';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen'
import store from './src/redux';
import socketsApp from './src/utills/socket';

const App = () => {

  const requestUserPermission = async() => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    requestUserPermission();
    socketsApp();
    SplashScreen.hide();
  }, []);

  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />} 
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
