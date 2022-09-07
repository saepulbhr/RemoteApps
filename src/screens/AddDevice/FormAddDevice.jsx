import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'; 
import NetInfo from '@react-native-community/netinfo';
import { ActivityAction, startActivityAsync } from 'expo-intent-launcher'; 
import ModalSetWifi from './Modal';
import HeaderContent from './HeaderContent';
import Inputs from './Inputs';
import { useTheme } from 'react-native-paper';

function FormAddDevice(props) {
  const theme =  useTheme()
  const [visible, setVisible] = useState(false);
  const [isWifi, setIsWifi] = useState({ status: false, name: '' });

  const hideModal = () => setVisible(false);

  const handleCheckWifiOn = async () => {
    await NetInfo.fetch().then((state) => {
      if (state.type === 'cellular') {
        setVisible(true);
        setIsWifi({ ...isWifi, status: true });
      } else {
        setVisible(false);
        setIsWifi({ ...isWifi, status: false, name: state.details.ssid });
      }
    });
  };

  useEffect(() => {
    handleCheckWifiOn();
  }, []);

  const handleTurnOnWifi = async () => {
    const turnOn = await startActivityAsync(
      (ActivityAction.WIFI_SETTINGS = 'android.settings.WIFI_SETTINGS')
    );

    if (turnOn.resultCode === 0) {
      setIsWifi({ ...isWifi, status: false });
      handleCheckWifiOn();
    }
  };

  return (
    <View style={[styles.root,{backgroundColor:theme.colors.white}]}>
      {visible ? (
        <ModalSetWifi
          onVisible={visible}
          onHide={hideModal}
          onTurnOnfWifi={handleTurnOnWifi}
        />
      ) : (
        <>
          <View style={styles.containerHeader}>
            <HeaderContent
              isWifi={isWifi.status}
              onTurnOnfWifi={handleTurnOnWifi}
            />
          </View>
          <View style={styles.containerForm}>
            <Inputs onValueWifi={isWifi.name} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  containerHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    flex: 2,
  },
});

export default FormAddDevice;
