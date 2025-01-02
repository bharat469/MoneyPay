import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {COLORS} from '../utils/colorHelper';
import Button from '../components/button';
import Header from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {clearToken, storeToken} from '../utils/redux/authSlice';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = ({route}) => {
  const {data} = route.params;
  const navigation =useNavigation()
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const onLogout = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.removeItem('userToken');
      console.log('AsyncStorage cleared');

      // Sign out from Firebase
      await auth().signOut();
      console.log('Logged out from Firebase');
      dispatch(clearToken());
      // Navigate to Login or Home screen
      // Use navigation to redirect if required
      // Example: navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Logout failed', 'Something went wrong. Please try again.');
    }
  };
  console.log(data);
  const _getProfileData = () => {
    firestore()
      .collection('UserDetail')
      .where('Email', '==', data?.EMAIL)
      .get()
      .then(res => {
        if (res?.docs.length !== 0) {
          setUserData(res?.docs[0]?.data());
        } else {
          Alert.alert(' User not Found');
        }
      })
      .catch(e => console.log('ERROR in getting Data', e));
  };

  useEffect(() => {
    _getProfileData();
  }, []);

  const initials = userData?.Name.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <View style={styles.container}>
      <Header headerName={'Profile Page'} onPress={()=>navigation.goBack()} />
      <View style={styles.profileSection}>
        <View
          style={[
            styles.profilePlaceholder,
            {backgroundColor: COLORS.secondaryColor},
          ]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            marginVertical: 22,
            padding: 12,
            borderColor: COLORS.secondaryColor,
            borderRadius: 6,
          }}>
          <Text style={styles.userName}> Name : {userData?.Name}</Text>
          <Text style={styles.userEmail}>Email : {userData?.Email}</Text>
          <Text style={styles.userEmail}>Phone Number {userData?.phoneNo}</Text>
        </View>
      </View>
      <Button
        buttonName={'Logout'}
        btnText={styles.logoutText}
        btnStyle={styles.logoutButton}
        onPress={() => onLogout()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.primaryColor,
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 22,
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: COLORS.whiteColor,
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: COLORS.secondaryColor,
    alignItems: 'center',
    padding: 22,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  initials: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profilePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
