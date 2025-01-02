import React, {useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import NavigationContainer from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/utils/redux/store';
const App = () => {
  return (
    <SafeAreaView style={styles.allApp}>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  allApp: {
    flex: 1,
  },
});

export default App;
