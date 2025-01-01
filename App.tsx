/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import NavigationContainer from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.allApp}>
      <StatusBar />

      <NavigationContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  allApp: {
    flex: 1,
  },
});

export default App;
