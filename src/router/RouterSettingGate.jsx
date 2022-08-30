import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import GateSetting from "../screens/Gate/pengaturan";
import SettingSpeed from "../screens/SettingSpeed";

const Stack = createStackNavigator();

function RouterSettingGate(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        component={GateSetting}
        name="setting gate"
        options={{
          headerShown: false,
          title: "Home",
          headerTintColor: "#fff",
          headerTitleAlign: "left",
        }}
      />

      <Stack.Screen
        name="setting speed"
        component={SettingSpeed}
        options={{
          headerShown: false,
          title: "kecepatan",
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />
    </Stack.Navigator>
  );
}

export default RouterSettingGate;
