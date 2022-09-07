import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

function LostConnection(props) {
  const navigation = useNavigation();
  return (
    <View style={style.root}>
      <View style={style.container}>
        <Image
          source={require('../../../common/500.png')}
          resizeMode={'center'}
          style={{ width: '100%' }}
        />
      </View>
      <View style={style.containerBtn}>
        <View style={style.button}>
          <Button mode='contained' onPress={() => navigation.goBack()}>
            Kembali
          </Button>
        </View>
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
    flex: 0.5,
  },
  containerBtn: { 
    display: 'flex',
  },
  button:{
    paddingLeft:16,
    paddingRight:16
  }
});

export default LostConnection;
