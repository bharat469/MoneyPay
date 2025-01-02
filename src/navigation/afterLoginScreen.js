import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import ChatDetailScreen from '../pages/chatDetailScreen';
import ProfilePage from '../pages/profilePage';

// Create a Stack Navigator instance
const Stack = createNativeStackNavigator();

const AfterLoginScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ChatDetail" 
        component={ChatDetailScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProfilePage" 
        component={ProfilePage} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AfterLoginScreen;
