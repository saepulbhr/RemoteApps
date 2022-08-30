import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function LostConnection(props) {
  return (
    <View style={style.root}>
      <View style={style.container}>
        <Image
          source={require('../../../common/500.png')}
          resizeMode={'center'}
          style={{ width: '100%' }}
        />
        <Button>Kembali</Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
});

export default LostConnection;
