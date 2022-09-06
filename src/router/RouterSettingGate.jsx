import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import GateSetting from '../screens/Gate/pengaturan';
import SettingSpeed from '../screens/SettingSpeed'; 

const Stack = createStackNavigator();

function RouterSettingGate(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        component={GateSetting}
        name="settings"
        options={{
          headerShown: true,
          title: "Pengaturan Gerbang",
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerStyle: { elevation: 0, shadowOpacity: 0 }, 
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
    </Stack.Navigator>
  );
}

export default RouterSettingGate;
