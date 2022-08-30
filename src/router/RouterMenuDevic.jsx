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
        }}
      />

      <Stack.Screen
        name='setting speed'
        component={SettingSpeed}
        options={{
          headerShown: true,
          title: 'kecepatan',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />

      <Stack.Screen
        name='setting gate'
        component={RouterSettingGate}
        options={{
          headerShown: true,
          title: 'pengaturan',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />

      <Stack.Screen
        name='Error 500'
        component={LostConnection}
        options={{ headerShown: true, title:'Error' }}
      />
    </Stack.Navigator>
  );
}

export default RouterMenuDevic;
