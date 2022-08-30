import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Gate from '../../common/gate.png';

function Devices(props) {
  const { status, onChangeStatus } = props;
  const navigation = useNavigation();
  const menus = [{ id: 1, title: 'Gerbang', link: 'Gerbang', icon: Gate }];

  // console.log('status', status);
  const handleClick = (id, link) => {
    onChangeStatus(id);
    navigation.navigate(link);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        {menus.map((menu) => (
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: status === menu.id ? 'green' : 'white',
              },
            ]}
            key={menu.id}
            onPress={() => handleClick(menu.id, menu.link)}
          >
            <Image source={menu.icon} style={{ width: 50, height: 50 }} />
            <Text style={{ color: status === menu.id ? 'white' : 'black', marginTop:8 }}>
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex', 
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  button: {
    padding: 16,
    borderWidth: 1,
    marginRight: 16,
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderRadius: 10,
    marginTop: 8,
  },
});

export default Devices;
