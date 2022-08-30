import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons';
import Devices from './Devices';
import Header from './Header';

function DashboardScreen(props) {
  const [status, setStatus] = useState(1);

  const handleChangeStatus = (param) => setStatus(param);
  return (
    <View style={styles.container}>
      <Header />
      <Devices status={status} onChangeStatus={handleChangeStatus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
});

export default DashboardScreen;
