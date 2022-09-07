import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FormSignUp from './components/FormSignUp';
import Header from './components/Header';

function SignUp(props) {
  return (
    <View style={styles.root}>
      <Header />
      <FormSignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    display: 'flex',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default SignUp;
