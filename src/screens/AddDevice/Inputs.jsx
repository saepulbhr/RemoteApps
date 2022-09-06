import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

function Inputs({ onValueWifi }) {
  return (
    <View>
      <TextInput
        mode='outlined'
        placeholder='Wi-Fi'
        value={onValueWifi}
        style={styles.input}
        left={
          <TextInput.Icon name={() => <Icon name='ios-wifi' size={21} />} />
        }
      />

      <TextInput
        secureTextEntry={true}
        mode='outlined'
        placeholder='Password'
        style={styles.input}
        left={
          <TextInput.Icon name={() => <Icon name='lock-open' size={21} />} />
        }
      />
      <Button mode='contained' style={styles.input}>
        kirim
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 16,
  },
});

export default Inputs;
