import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import FormLogin from './form';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerHeaderCurve}>
        <View style={styles.containerHeaderContent}>
          <View style={styles.containerImg}>
            <Image
              style={styles.tinyLogo}
              source={require('../../../common/gate.png')}
            />
          </View>
          <FormLogin />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 24,
  },

  tinyLogo: {
    width: 200,
    height: 90,
  },

  containerHeader: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get("window").height - 380,
    backgroundColor: '#FFF',
  },
  containerHeaderCurve: {
    width: Dimensions.get('window').height * 2,
    height: Dimensions.get('window').height * 2,
    borderRadius: Dimensions.get('window').height * 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#0886c4',
    alignItems: 'center',
    marginLeft:
      (Dimensions.get('window').width / Dimensions.get('window').height) *
        Dimensions.get('window').height *
        0.5 -
      Dimensions.get('window').height,
    marginTop: -Dimensions.get('window').height * 1.6,
    paddingTop: Dimensions.get('window').height * 1.6,
  },
  containerHeaderContent: {
    paddingTop: Dimensions.get('window').height * 0.02,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },
});

export default Header;
