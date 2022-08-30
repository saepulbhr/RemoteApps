import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function Buttons(props) {
  const { status, onChangeStatus } = props;
  const menus = [
    { id: 1, title: 'Buka' },
    { id: 2, title: 'Orang' },
    { id: 3, title: 'Tutup' },
  ];

 
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
            onPress={() => onChangeStatus(menu.id)}
          >
            <Text style={{ color: status === menu.id ? 'white' : 'black' }}>
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
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
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
  },
});

export default Buttons;
