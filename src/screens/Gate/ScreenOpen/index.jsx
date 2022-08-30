import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNSpeedometer from 'react-native-speedometer';

import Paho from 'paho-mqtt';
import { useNavigation } from '@react-navigation/native';

const wsbroker = '192.168.200.199'; //mqtt websocket enabled broker
const wsport = 9001; // port for above

const client = new Paho.Client(
  wsbroker,
  wsport,
  '/ws',
  'myclientid_' + parseInt(Math.random() * 100, 10)
);

function ScreenOpen(props) {
  const navigation = useNavigation();
  const [speed, setSpeed] = useState(70);
  const [value, setValue] = useState('5');
  const [status, setStatus] = useState({ status: false, message: '' });
  const [payload, setPayload] = useState({
    currentPositionGate: null,
    title: '',
    icon: '',
  });
  const [statusSetting, setStatusSetting] = useState(false);

  function onMessage(message) {
    if (message.destinationName === 'iot.user_id.device_id.device')
      setValue(parseInt(message.payloadString));
  }

  var options = {
    timeout: 3,
    keepAliveInterval: 30,
    userName: 'iot',
    password: 'iot1407',
    onSuccess: function (message) {
      console.log('CONNECTION SUCCESS', message);
      client.subscribe('iot.user_id.device_id.device', { qos: 1 });
      setStatus({ status: true, message: 'terhubung' });
    },
    onFailure: function (message) {
      console.log('CONNECTION FAILURE - ' + message.errorMessage);
      if (message.errorMessage === 'AMQJSC0001E Connect timed out.') {
        // navigation.navigate('Error 500');
        setStatus({ status: false, message: 'koneksi terputus' });
      }
    },
  };

  useEffect(() => {
    client.connect(options);
    return () => client.disconnect();
  }, []);

  function openTheDoor(c, title, icon) {
    setValue(c);
    setPayload({ ...payload, currentPositionGate: c, title: title, icon });

    console.log('c', c);

    const message = new Paho.Message(c.toString());
    message.destinationName = 'iot.user_id.device_id.device';
    client.send(message);
  }

  function closeTheDoor(c) {
    setValue('3');
    const message = new Paho.Message((3).toString());
    message.destinationName = 'iot.user_id.device_id.device';
    client.send(message);
  }

  const menus = [
    { id: 1, title: 'kendaraan', icon: 'garage-open-variant' },
    { id: 2, title: 'orang', icon: 'walk' },
    { id: 3, title: 'tutup', icon: 'garage-variant-lock' },
  ];

  const handleOpenSetting = () => {
    navigation.navigate('setting speed', {
      currentSpeed: speed,
      setSpeed: setSpeed,
    });
  };

  console.log('status', status);
  return (
    <View style={styles.root}>
      {/* <View style={styles.containerSetting}>
        <TouchableOpacity
          style={styles.buttonSetting}
          onPress={handleOpenSetting}
        >
          <Icons name='cog' size={18} />
        </TouchableOpacity>
      </View> */}
      <View style={[styles.containerContent]}>
        <View style={[styles.containerInfoSpeed]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('setting speed', {
                currentSpeed: speed,
                setSpeed: setSpeed,
              })
            }
            style={styles.buttonSetting}
          >
            <Text style={{ fontSize: 10, textAlign: 'center' }}>kecepatan</Text>
            <View>
              <RNSpeedometer value={speed} size={35} />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                {speed}%
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text>
              Status : {status.status ? 'terhubung' : 'koneksi terputus'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonSetting}
            onPress={handleOpenSetting}
            // onPress={()=>navigation.navigate('setting gate')}
          >
            <Icons name='cog' size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfo}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>
            Status saat : {payload.title}
          </Text>
          <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <Icons name={payload.icon} size={100} />
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        {menus.map((menu) => (
          <View key={menu.title}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    payload.currentPositionGate == menu.id
                      ? `#73f86e`
                      : '#FFFFFF',
                },
              ]}
              key={menu.id}
              onPress={() => {
                openTheDoor(menu.id, menu.title, menu.icon);
              }}
            >
              <Icons name={menu.icon} size={34} />
              <Text>{menu.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
  containerContent: {
    flex: 1.5,
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerSwipe: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSetting: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    padding: 16,
    borderWidth: 1,
    marginRight: 16,
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderRadius: 10,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
  buttonSetting: {
    padding: 8,
    borderWidth: 1,
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderRadius: 10,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  containerInfo: {
    display: 'flex',
    flex: 1.7,
    alignItems: 'center',
  },

  containerInfoSpeed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ScreenOpen;
