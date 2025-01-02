import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import InputComponent from '../components/InputComponent';
import Button from '../components/button';
import LottieView from 'lottie-react-native';
import Header from '../components/header';
import {COLORS} from '../utils/colorHelper';
import {Height, Width} from '../utils/dimention';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {_handleSignUpTask} from '../utils/services/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {storeToken} from '../utils/redux/authSlice';

const RegisterationScreen = () => {
  const navigation = useNavigation();
  const [RegisterData, setRegisterData] = useState({
    Name: '',
    Email: '',
    phoneNo: '',
    PasswordFirst: '',
    PasswordConfirm: '',
    PasswordFinal: '',
  });
  const [error, setError] = useState({});
  const [token, saveToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(uuid.v4());
  const isValidEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const dispatch = useDispatch();

  const validateForm = () => {
    let newError = {};

    if (!RegisterData.Name) {
      newError.name = 'NAME IS REQUIRED';
    }
    if (!RegisterData.Email) {
      newError.email = 'EMAIL IS REQUIRED';
    } else if (!isValidEmail(RegisterData.Email)) {
      newError.email = 'EMAIL HAS INVALID FORMAT !!!';
    }

    if (!RegisterData.PasswordFirst) {
      newError.password = 'PASSWORD MUST BE REQUIRED !!!';
    } else if (RegisterData.PasswordFirst.length < 6) {
      newError.password = 'PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG';
    }

    if (!RegisterData.phoneNo) {
      newError.phoneNumber = 'PHONE NUMBER IS REQUIRED !!!';
    } else if (RegisterData.phoneNo.length !== 10) {
      newError.phoneNumber = 'PHONE NUMBER IS WRONG KINDLY CHECK';
    }

    if (RegisterData.PasswordConfirm) {
      if (RegisterData.PasswordFirst !== RegisterData.PasswordConfirm) {
        newError.confirmErr = 'PLEASE CHECK YOUR PASSWORD IT DID NOT MATCH!!!';
      }
    }

    setError(newError);
    console.log('New Error:', newError);
    return Object.keys(newError).length === 0;
  };

  const getFirestoreData = async () => {
    try {
      const userDocument = await firestore()
        .collection('UserDetail')
        .doc('7Zkw6ZUjpu1VN6zgGUBj')
        .get();
      console.log('ashajs', userDocument._data);
    } catch (e) {
      console.log('akhsjas', e);
    }
  };

  const UserTokenSet = async userToken => {
    // Save the token to AsyncStorage
    await AsyncStorage.setItem('userToken', userToken)
      .then(() => {
        console.log('User token saved successfully.');
        saveToken(userToken);
        dispatch(storeToken(userToken));
      })
      .catch(error => {
        console.error('Error saving user token:', error);
      });
  };

  const setFirebaseData = async data => {
    try {
      await firestore()
        .collection('UserDetail')
        .doc(userId) // Specify the document ID
        .set({...data, userId: userId}) // Use set instead of add
        .then(() => {
          console.log('User added successfully');
          _saveCurrentUserDetail(RegisterData.Name, RegisterData.Email, userId);
        });
    } catch (e) {
      console.error('Error adding user:', e);
    }
  };

  const _saveCurrentUserDetail = async (name, email, userId) => {
    try {
      console.log('Saving details:', { name, email, userId });
  
      await AsyncStorage.multiSet([
        ['NAME', name],
        ['EMAIL', email],
        ['USERID', userId],
      ]);
  
      console.log('User details stored successfully');
    } catch (error) {
      console.error('Error storing user details:', error);
    }
  };

  const onSubmit = () => {
    setLoading(true);
    const isFormValid = validateForm(); // Validate form inputs
    console.log('Validation Result:', isFormValid);

    if (isFormValid) {
      console.log('Form is valid. Proceeding with registration...');

      setFirebaseData(RegisterData);

      auth()
        .createUserWithEmailAndPassword(
          RegisterData.Email,
          RegisterData.PasswordConfirm,
        )
        .then(userToken => {
          UserTokenSet(userToken.user.uid), setLoading(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      console.log('Validation failed. Check the form fields.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getFirestoreData();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.createAccountStyle}>
      <Header
        headerName="Create an Account"
        onPress={() => navigation.goBack()}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.primarySection}>
          <LottieView
            source={require('../assets/lottie/dog.json')}
            autoPlay
            loop
            style={{width: 250, height: 200}}
          />
          {loading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <View>
              <InputComponent
                placeholder="Enter Name"
                value={RegisterData.Name}
                style={[
                  error.email
                    ? {borderColor: COLORS.redColor, borderWidth: 2}
                    : null,
                ]}
                onChangeText={value =>
                  setRegisterData({...RegisterData, Name: value})
                }
              />
              {error.name ? (
                <Text style={styles.errorMessage}>{error.name}</Text>
              ) : null}
              <InputComponent
                placeholder="Enter Email"
                value={RegisterData.Email}
                style={[
                  error.email
                    ? {borderColor: COLORS.redColor, borderWidth: 2}
                    : null,
                ]}
                onChangeText={value =>
                  setRegisterData({...RegisterData, Email: value})
                }
              />
              {error.email ? (
                <Text style={styles.errorMessage}>{error.email}</Text>
              ) : null}

              <InputComponent
                placeholder="Enter Phone number"
                value={RegisterData.phoneNo}
                style={[
                  error.phoneNumber
                    ? {borderColor: COLORS.redColor, borderWidth: 2}
                    : null,
                ]}
                onChangeText={value =>
                  setRegisterData({...RegisterData, phoneNo: value})
                }
              />
              {error.phoneNumber ? (
                <Text style={styles.errorMessage}>{error.phoneNumber}</Text>
              ) : null}
              <InputComponent
                placeholder="Password"
                value={RegisterData.PasswordFirst}
                style={[
                  error.password
                    ? {borderColor: COLORS.redColor, borderWidth: 2}
                    : null,
                ]}
                secureTextEntry={false}
                onChangeText={value =>
                  setRegisterData({...RegisterData, PasswordFirst: value})
                }
              />
              {error.password ? (
                <Text style={styles.errorMessage}>{error.password}</Text>
              ) : null}

              <InputComponent
                placeholder="confirm Password"
                value={RegisterData.PasswordConfirm}
                style={[
                  error.confirmErr
                    ? {borderColor: COLORS.redColor, borderWidth: 2}
                    : null,
                ]}
                onChangeText={value =>
                  setRegisterData({...RegisterData, PasswordConfirm: value})
                }
              />
              {error.confirmErr ? (
                <Text style={styles.errorMessage}>{error.confirmErr}</Text>
              ) : null}
            </View>
          )}

          <Button buttonName="Register" onPress={() => onSubmit()} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterationScreen;

const styles = StyleSheet.create({
  createAccountStyle: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  primarySection: {
    alignItems: 'center',
  },
  textStyle: {
    padding: 12,
    borderWidth: 1,
    width: Width(80),
    fontSize: Height(1.8),
    borderRadius: 6,
    margin: 12,
    color: COLORS.blackColor,
    borderColor: COLORS.blackColor,
  },
  errorMessage: {
    textAlign: 'center',
    color: COLORS.redColor,
    fontSize: Height('1.6%'),
  },
});
