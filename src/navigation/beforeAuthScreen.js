import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/loginScreen';

const BeforeAuthScreen = createNativeStackNavigator({
  screens:{
    LoginScreen:LoginScreen,
  }
})

export default BeforeAuthScreen
