import messaging from '@react-native-firebase/messaging';

 export default  async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getToken();
    console.log('Authorization status:', authStatus);
  }
}

 const   getToken =async()=> {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token

            // await AsyncStorage.setItem('fcmToken', fcmToken);
            alert(fcmToken)

        }
    }
  }