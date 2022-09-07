import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import WelcomeScreen from '../screens/Login/components/WelcomeScreen';
import FormLogin from '../screens/Login/components/FornLogin';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

function RouterLogin(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name='welcome screen'
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='form login'
        component={FormLogin}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='sign up'
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RouterLogin;
