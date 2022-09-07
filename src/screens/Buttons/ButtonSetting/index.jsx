import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function ButtonSetting(props) {
  const navigation = useNavigation();

  const handleOpenSetting = () => {
    navigation.navigate('setting gate');
  };

  return (
    <View style={styles.containerBtnSetting}>
      <TouchableOpacity
        style={styles.buttonSetting}
        onPress={handleOpenSetting}
      >
        <Icons name='cog' size={18} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBtnSetting: {
    flex: 1,
    paddingRight:8,
    display:'flex',
    justifyContent:'flex-end'
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
});

export default ButtonSetting;
