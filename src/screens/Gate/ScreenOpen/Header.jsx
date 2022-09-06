import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header(props) {
  const navigation=  useNavigation()

  // const handleOpenSetting = () => {
  //   navigation.navigate('setting gate');
  // };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.currentGate}>{props.title}</Text>
        </View>

        {/* <View style={styles.containerBtnSetting}> */}
          {/* <TouchableOpacity style={styles.buttonSetting} onPress={handleOpenSetting}>
            <Icons name='cog' size={18} />
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTitle: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  containerBtnSetting: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonSetting: {
    padding: 8,
    borderWidth: 1,
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  currentGate: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing:0.7
  },
});

export default Header;
