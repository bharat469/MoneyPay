import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';

import BeforeAuthScreen from './beforeAuthScreen';

const NavigationContainer = createStaticNavigation(BeforeAuthScreen)

export default NavigationContainer

const styles = StyleSheet.create({})