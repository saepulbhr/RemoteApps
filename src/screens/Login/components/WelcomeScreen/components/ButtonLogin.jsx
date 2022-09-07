import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, useTheme } from 'react-native-paper';

function ButtonLogin(props) {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Button
          mode='contained'
          onPress={() => navigation.navigate('form login')}
        >
          Login
        </Button>
        <Text style={{ marginTop: 16, textAlign: 'center' }}>
          <Text>Don't have an account ? </Text>
          <Text style={{ color: theme.colors.primary }} onPress={()=>navigation.navigate('sign up')}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  content: {
    width: '100%',
  },
});

export default ButtonLogin;
