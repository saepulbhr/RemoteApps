import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StoreContext from '../../store/context';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  useTheme,
  Card,
} from 'react-native-paper';

import RNSpeedometer from 'react-native-speedometer';

function SettingSpeed() {
  const usedContext = useContext(StoreContext);
  const { speed, handleChangeSpeed } = usedContext;
  const theme = useTheme();

  const navigation = useNavigation();
  const [tempSpeed, setTempSpeed] = useState(speed);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const data = [
    { id: 1, title: '30 %', value: 30 },
    { id: 2, title: '40 %', value: 40 },
    { id: 3, title: '50 %', value: 50 },
    { id: 4, title: '60 %', value: 60 },
    { id: 5, title: '70 %', value: 70 },
    { id: 6, title: '80 %', value: 80 },
    { id: 7, title: '90 %', value: 90 },
  ];

  const hideDialog = () => {
    navigation.navigate('Gerbang');
    setVisible(false);
  };

  const onChangeSpeed = (speed) => {
    setTempSpeed(speed);
  };

  const handleUpdate = () => {
    setLoading(true);
    handleChangeSpeed(tempSpeed);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.white }]}>
      {/* <Text style={styles.titleMenu}>Kecepatan saat ini</Text> */}
      {/* <View style={styles.currentSpeed}> */}
      <Card style={styles.card} elevation={16}>
        <RNSpeedometer value={tempSpeed} size={200} />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 16,
            marginTop: 6,
            letterSpacing:0.5
          }}
        >
          Kecepatan saat ini {speed}%
        </Text>
      </Card>
      {/* </View> */}

      <View style={styles.boxSettingSpeed}>
        <Text style={styles.titleMenu}>Atur kecepatan</Text>
        <View style={{ marginTop: 16 }}>
          {data.map((item) => (
            <TouchableOpacity
              style={[styles.buttonSpeeds]}
              key={item.title}
              onPress={() => onChangeSpeed(item.value)}
            >
              <Text
                style={{
                  color: tempSpeed === item.value ? 'green' : 'black',
                  fontWeight: tempSpeed === item.value ? '800' : '',
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
          <Button
            loading={loading}
            mode='contained'
            style={styles.buttonSave}
            onPress={handleUpdate}
          >
            Simpan
          </Button>
        </View>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Paragraph>Update kecepatan berhasil</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>kembali</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    flex: 1,
  },
  currentSpeed: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  card: {
    width: '100%',
    padding: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  speed: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  boxSpeed: {
    padding: 24,
    marginTop: 16,
  },
  boxSettingSpeed: {
    flex: 4,
    marginTop: 24,
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: '700',
  },
  buttonSpeeds: {
    padding: 16,
  },
  buttonSave: {
    marginTop: 8,
  },
});

export default SettingSpeed;
