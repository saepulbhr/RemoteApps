import React from 'react';
import { Image, StyleSheet, View } from 'react-native'; 

function SplashScreen(props) { 
  return (
    <View style={[ styles.container]}>
      <Image
        source={require('../../../common/gate.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 50,
  },
});

export default SplashScreen;
