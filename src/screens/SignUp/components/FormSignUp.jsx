import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';

function FormSignUp(props) {
  const theme = useTheme();
  const navigation= useNavigation()
  return (
    <View style={styles.root}>
      <TextInput dense={true} style={[styles.input,{borderTopLeftRadius:10}]} mode='outlined' />
      <TextInput dense={true} style={styles.input} mode='outlined' />
      <TextInput dense={true} style={styles.input} mode='outlined' />
      <TextInput dense={true} style={styles.input} mode='outlined' />
      <TextInput dense={true} style={styles.input} mode='outlined' />
      <TextInput dense={true} style={styles.input} mode='outlined' />
      <Button style={styles.button} mode='contained'>
        Sign Up
      </Button>
      <Text style={{textAlign:'center', marginTop:6}}>
        <Text>Already have an account ? </Text>
        <Text
        onPress={()=> navigation.navigate('form login')}
          style={{
            color: theme.colors.primary,
          }}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    display: 'flex',  
  },
  input: {
    marginTop: 6,
  },
  button: {
    marginTop: 16,
  },
});

export default FormSignUp;
