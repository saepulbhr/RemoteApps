import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button,  useTheme } from 'react-native-paper';

function HeaderContent({ isWifi, onTurnOnfWifi }) {
  const theme = useTheme();
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Pilih Wi-Fi dan masukan password</Text>
      <Text style={{ color: theme.colors.secondaryText }}>
        masukan nama wifi dan password
      </Text>
      <View style={{ marginTop: 16 }}>
        <Icon name='ios-wifi' size={54} />
      </View>

      {isWifi ? (
        <View style={{ marginTop: 16 }}>
          <Text>perangkat tidak terhubung dengan Wi-Fi</Text>
          <Button onPress={onTurnOnfWifi}>hidupkan</Button>
        </View>
      ) : (
        <Button onPress={onTurnOnfWifi}>Rubah Jaringan</Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 16,
    letterSpacing: 0.8,
    fontWeight: '700', 
  },
  containerForm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    flex: 2,
  },
  input: {
    marginTop: 16,
  },
});

export default HeaderContent;
