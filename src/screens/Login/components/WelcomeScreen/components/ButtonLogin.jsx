import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function ButtonLogin(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Button
          mode='contained'
          onPress={() => navigation.navigate('form login')}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
});

export default ButtonLogin;
