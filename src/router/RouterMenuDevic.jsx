import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import DashboardScreen from '../screens/Dashboard';
import ScreenOpen from '../screens/Gate/ScreenOpen';
import SettingSpeed from '../screens/SettingSpeed';
import LostConnection from '../screens/Errors/LostConnection';
import RouterSettingGate from './RouterSettingGate';
import ButtonSetting from '../screens/Buttons/ButtonSetting';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBack from '../screens/Buttons/ButtonBack';
import AddDevice from '../screens/AddDevice';
import FormAddDevice from '../screens/AddDevice/FormAddDevice';

const Stack = createStackNavigator();

function RouterMenuDevic(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        component={DashboardScreen}
        name='Home'
        options={{
          headerShown: false,
          title: 'Home',
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name='Gerbang'
        component={ScreenOpen}
        options={{
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
          headerRight: () => <ButtonSetting />,
          headerLeft: () => <ButtonBack />,
        }}
      />

      <Stack.Screen
        name='setting gate'
        component={RouterSettingGate}
        options={{
          headerShown: false,
          title: 'pengaturan',
          headerTitleAlign: 'center',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerLeft: () => <ButtonBack />,
        }}
      />

      <Stack.Screen
        name='add device'
        component={AddDevice}
        options={{
          headerShown: true,
          title: 'Tambah Alat',
          headerTitleAlign: 'center',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerLeft: () => <ButtonBack />,
        }}
      />

      <Stack.Screen
        name='form add device'
        component={FormAddDevice}
        options={{
          headerShown: true,
          title: 'Tambah Alat',
          headerTitleAlign: 'center',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerLeft: () => <ButtonBack />,
        }}
      />

      <Stack.Screen
        name='Error 500'
        component={LostConnection}
        options={{ headerShown: true, title: 'Error' }}
      />
    </Stack.Navigator>
  );
}

export default RouterMenuDevic;
