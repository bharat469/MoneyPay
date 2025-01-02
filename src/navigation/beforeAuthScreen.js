import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/loginScreen';
import RegisterationScreen from '../pages/RegisterationScreen';

// Create a Stack Navigator instance
const Stack = createNativeStackNavigator();

const BeforeAuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="LoginScreen" 
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
