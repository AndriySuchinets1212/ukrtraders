/**
 * @format
 */

import {AppRegistry} from 'react-native';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import App from './App';
import {name as appName} from './app.json';

export const initNotificationAndroid = () => {
    PushNotification.createChannel({
        channelId: "1", 
        channelName: "My channel", 
      },  (created) => console.log(`createChannel returned '${created}'`) 
    );
      //listener for closed app android
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        //notifications handler for android
        PushNotification.localNotification({
            message: remoteMessage.notification.body,
            title: remoteMessage.notification.title,
            channelId: "1",
        });
        PushNotificationIOS.addNotificationRequest({
            id: '1',
            title: remoteMessage.notification.title,
            body: remoteMessage.notification.body,
        })
    })

    //listener for opened app android
    messaging().onMessage(async remoteMessage => {
        //notifications handler for android
        PushNotification.localNotification({
            message: remoteMessage.notification.body,
            title: remoteMessage.notification.title,
            channelId: "1",
        })
        PushNotificationIOS.addNotificationRequest({
            id: '1',
            title: remoteMessage.notification.title,
            body: remoteMessage.notification.body,
        })
    ;});   
        
}

initNotificationAndroid();

AppRegistry.registerComponent(appName, () => App);
