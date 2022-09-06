import React, { useEffect, useState, useContext } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import StoreContext from '../../../store/context';
import Paho from 'paho-mqtt';
import { useNavigation } from '@react-navigation/native';
import SnackbarError from '../../Snackbar/Error';
import Buttons from './Buttons';
import Header from './Header';
import Infromation from './Infromation';
import NetInfo from '@react-native-community/netinfo';

import WifiManager from 'react-native-wifi-reborn';
import { Button, useTheme, Text } from 'react-native-paper';

const wsbroker = '192.168.200.199'; //mqtt websocket enabled broker
const wsport = 9001; // port for above

const client = new Paho.Client(
  wsbroker,
  wsport,
  '/ws',
  'myclientid_' + parseInt(Math.random() * 100, 10)
);

function ScreenOpen(props) {
  const usedContext = useContext(StoreContext);
  const { speed, handleChangeStatus } = usedContext;
  const theme = useTheme();

  const navigation = useNavigation();
  const [value, setValue] = useState('5');
  const [status, setStatus] = useState({ status: false, message: '' });
  const [isSpeed, setIsSpeed] = useState(speed);
  const [connectionDevice, setConnectionDevice] = useState({
    status: false,
    message: '',
  });
  const [payload, setPayload] = useState({
    currentPositionGate: null,
    title: '',
    icon: '',
  });
  const [statusSetting, setStatusSetting] = useState(false);

  function onMessage(message) {
    // console.log('is message', message);
    // if (message.destinationName === 'iot.user_id.device_id.device')
    //   setValue(parseInt(message.payloadString));
  }

  // var options = {
  //   timeout: 3,
  //   keepAliveInterval: 30,
  //   userName: 'iot',
  //   password: 'iot1407',
  //   onSuccess: function (message) {
  //     console.log('CONNECTIONs SUCCESS', message);
  //     client.subscribe('iot.user_id.device_id.device', { qos: 1 });
  //     client.onMessageArrived = onMessage
  //     // setStatus({ status: true, message: "terhubung" });
  //     handleChangeStatus(true);
  //   },
  //   onFailure: function (message) {
  //     // console.log('CONNECTION FAILURE - ' + message.errorMessage);
  //     if (message.errorMessage === 'AMQJSC0001E Connect timed out.') {
  //       // navigation.navigate('Error 500');
  //       // setStatus({ status: false, message: "koneksi terputus" });
  //       setConnectionDevice({ status: true, message: 'koneksi terputus' });
  //       handleChangeStatus(false);
  //     }
  //   },
  // };

  // const handleCekWifi = async () => {
  //   console.log(PermissionsAndroid.RESULTS.GRANTED);
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     {
  //       title: 'Location permission is required for WiFi connections',
  //       message:
  //         'This app needs location permission as this is required  ' +
  //         'to scan for wifi networks.',
  //       buttonNegative: 'DENY',
  //       buttonPositive: 'ALLOW',
  //     }
  //   );

  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     // const enabled = await WifiManager.isEnabled()
  //     // console.log(enabled);
  //     await WifiManager.reScanAndLoadWifiList()
  //     .then(result => console.log('result list wifi'))
  //     .catch(error => error.message)
  //   }else{
  //     console.log('error coooy');
  //   }
  // }

   

  // useEffect(() => {
  //   handleCekWifi();
  // }, []);

  useEffect(() => {
    client.connect({
      userName: 'iot',
      password: 'iot1407',
      onSuccess: () => {
        console.log('Connected!');
        client.subscribe('iot.user_id.device_id.device', { qos: 1 });
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });

    return () => client.disconnect();
  }, []);

  client.onMessageArrived = onMessage;

  function openTheDoor(gerbangId, title, icon) {
    setValue(gerbangId);
    setPayload({
      ...payload,
      currentPositionGate: gerbangId,
      title: title,
      icon,
    });

    if (client.isConnected() === false) {
      setConnectionDevice({ status: true, message: 'koneksi terputus' });
    } else {
      const message = new Paho.Message(gerbangId.toString());
      message.destinationName = 'iot.user_id.device_id.device';
      client.send(message);
    }
  } 
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.white }]}>
      <Header title={payload.title} />
      <Infromation payload={payload} currentIcon={payload.icon} />

      <Buttons payload={payload} onChangeGate={openTheDoor} />

 

      {/* {connectionDevice.status && (
        <SnackbarError
          status={connectionDevice.status}
          message={connectionDevice.message}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    display: 'flex',
    flex: 1,
  },
  error: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default ScreenOpen;
