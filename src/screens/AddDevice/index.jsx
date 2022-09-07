import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import { ActivityAction, startActivityAsync } from 'expo-intent-launcher';
import Gate from '../../common/gate.png';
import { useNavigation } from '@react-navigation/native';

function AddDevice(props) {
  const theme = useTheme();
  const [wifiOn, setWifiOn] = useState(false);
 const navigation= useNavigation()

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      if (state.type === 'cellular') {
        setWifiOn(true);
      }
    });
  }, []);

  const turnOnWifi = () =>
    startActivityAsync(
      (ActivityAction.WIFI_SETTINGS = 'android.settings.WIFI_SETTINGS')
    );

  const devices = [
    {
      kategori: 'Gerbang',
      device: [{id:1, title: 'gerbang', icon: Gate, link:'form add device' }],
      id: 1,
    },
  ];

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.white }]}>
      {wifiOn && (
        <TouchableOpacity style={styles.error} onPress={turnOnWifi}>
          <Text style={{ letterSpacing: 0.9 }}>Nyalakan Wifi</Text>
          <Icon
            name='wifi-alert'
            size={16}
            style={{ color: wifiOn ? 'red' : 'green' }}
          />
        </TouchableOpacity>
      )}
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {devices.map((device) => (
            <Button key={device.id} style={{ marginRight: 8 }}>
              {device.kategori}
            </Button>
          ))}
        </ScrollView>
        <View style={styles.containerButton}>
          {devices &&
            devices?.map((menu) => {
              return (
                <View key={menu.id}>
                  {menu.device.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[styles.button]}
                      onPress={()=> navigation.navigate(item.link)}
                    >
                      <Image
                        source={item.icon}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text
                        style={{
                          marginTop: 8,
                        }}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    paddingTop: 16,
    display: 'flex',
  },
  error: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 16,
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  button: {
    width: 120,
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
    justifyContent: 'center',
  },
});

export default AddDevice;
