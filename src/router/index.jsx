import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/Loading/SplashScreen';
import DashboardScreen from '../screens/Dashboard';
import RouterMenuDevic from './RouterMenuDevic';
import WelcomeScreen from '../screens/Login/components/WelcomeScreen';
import RouterLogin from './RouterLogin';

const Stack = createStackNavigator();

function Routers(props) {
  const [foundToken, setFoundToken] = useState('');
  const [isLoad, setIsLoad] = useState(true);

  const checkToken = async () => {
    try {
      setIsLoad(true);
      let findingToken = await AsyncStorage.getItem('token');
      setTimeout(() => {
        setFoundToken(findingToken);
        setIsLoad(false);
      }, 1000);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Dashboard'
          component={RouterMenuDevic}
          options={{ headerShown: false }}
        /> */}
        {foundToken ? (
          <Stack.Screen
            name='Dashboard'
            component={RouterMenuDevic}
            options={{ headerShown: false }}
          />
        ) : isLoad ? (
          <Stack.Screen
            name='Splash'
            options={{ headerShown: false }}
            component={SplashScreen}
          />
        ) : (
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }} 
            component={RouterLogin}
          />
          
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
