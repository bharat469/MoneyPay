import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BeforeAuthScreen from './beforeAuthScreen';
import AfterLoginScreen from './afterLoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { storeToken } from '../utils/redux/authSlice';

const AppNavigation = () => {
  const [token, setToken] = useState(null);
  const isAuth=useSelector(state=>state.authentication?.isAuthenticate)
  const userToken=useSelector(state=>state.authentication?.userToken)
  const dispatch = useDispatch()

 

  const GetTokenUser = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        console.log('Token found:', storedToken);
        setToken(storedToken);
        dispatch(storeToken(storedToken))
      } else {
        console.log('User token not found.');
        setToken(null); // Explicitly set token to null if not found
      }
    } catch (error) {
      console.error('Error retrieving user token:', error);
    }
  };

  useEffect(() => {
    GetTokenUser();
  }, [token]);

  // Render screens based on token presence
  return (
    <NavigationContainer>
      {isAuth||userToken ? <AfterLoginScreen /> : <BeforeAuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigation;
