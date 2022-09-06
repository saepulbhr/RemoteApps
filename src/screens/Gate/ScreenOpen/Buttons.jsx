import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Buttons(props) {
  const { payload, onChangeGate } = props;
  const theme = useTheme();
  const menus = [
    { id: 1, title: 'Kendaraan', icon: 'garage-open-variant' },
    { id: 2, title: 'Orang', icon: 'walk' },
    { id: 3, title: 'Tutup', icon: 'garage-variant-lock' },
  ];

  return (
    <View style={styles.containerButton}>
      {menus.map((menu) => (
        <View style={styles.buttonContainer} key={menu.id}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  payload.currentPositionGate == menu.id
                    ? theme.colors.primary
                    : '#FFFFFF',
                elevation: 16,
                borderColor: '#FFFFFF',
                shadowColor:
                  payload.currentPositionGate == menu.id
                    ? theme.colors.primary
                    : 'black',
              },
            ]}
            onPress={() => {
              onChangeGate(menu.id, menu.title, menu.icon);
            }}
          >
            <Icons
              name={menu.icon}
              size={34}
              style={{
                color:
                  payload.currentPositionGate == menu.id
                    ? '#FFFFFF'
                    : theme.colors.primary,
              }}
            />
            <Text
              style={{
                color:
                  payload.currentPositionGate == menu.id
                    ? '#FFFFFF'
                    : theme.colors.primary,
              }}
            >
              {menu.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Buttons;
