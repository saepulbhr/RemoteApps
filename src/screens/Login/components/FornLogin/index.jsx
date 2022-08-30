import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function FormLogin(props) {
  return (
    <View style={styles.root}>
     <Header />
     <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingRight: 16,
    paddingLeft: 16,
    flex:1
  },
});

export default FormLogin;
