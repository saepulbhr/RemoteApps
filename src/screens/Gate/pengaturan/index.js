import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function GateSetting(props) {
 const navigation = useNavigation()
  const menu = [{ id: 1, title: 'kecapatan', icon: 'speedometer', link:'setting speed' }];

  const handlePress = menu => navigation.navigate(menu)
  return (
    <View style={styles.root}>
      {menu.map((menu) => (
        <TouchableOpacity onPress={()=>handlePress(menu.link)} key={menu.link}>
          <View>
            <List.Item
              title={menu.title}
              // left={(props) => <Icon name='speedometer' {...props} size={24} style={{marginTop:8}} />}
            />
            <Divider />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default GateSetting;
