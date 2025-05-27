import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screen/onboarding/Onboarding';
import {Platform} from 'react-native';
import Login from '../screen/onboarding/Login';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === 'android'
          ? {
              headerShown: false,
            }
          : {
              headerShown: false,
            }
      }
      initialRouteName="login">
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
