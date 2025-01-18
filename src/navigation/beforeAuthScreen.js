import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/loginScreen';
import RegisterationScreen from '../pages/RegisterationScreen';
import { ROUTE_NAME } from '../utils/routeNames';
import OnboardingScreen from '../pages/onboardingScreen';

// Create a Stack Navigator instance
const Stack = createNativeStackNavigator();

const BeforeAuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={ROUTE_NAME.onboardingScreen} 
        component={OnboardingScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name={ROUTE_NAME.loginScreen} 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterationScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default BeforeAuthScreen;
