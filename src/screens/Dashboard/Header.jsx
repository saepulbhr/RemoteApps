import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerUsername}>
        <Text style={styles.text12}>Selamat datang</Text>
        <Text style={styles.text14}>Username</Text>
      </View>
      <View style={styles.containerImg}>
        {/* <Image source={require('../../common/gate.png')} style={styles.image} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16, 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerUsername: {
    display: 'flex',
    flexGrow: 3,
    paddingTop:16,
    paddingBottom:16
  },
  containerImg: {
    display: 'flex',
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  text12: {
    color: 'grey',
  },
  text14: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing:1
  },
});

export default Header;
