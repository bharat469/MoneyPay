import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LoginSvg from '../assets/login.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../utils/colorHelper';
import InputComponent from '../components/InputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Height, Width} from '../utils/dimention';
import Button from '../components/button';
import {routesNames} from '../utils/navigation';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {storeToken} from '../utils/redux/authSlice';
import firestore from '@react-native-firebase/firestore'
import LinearGradient from 'react-native-linear-gradient'

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [LoginData, setLoginData] = useState({
    Email: '',
    password: '',
  });
  const [error, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, saveToken] = useState('');
  function isValidEmail(email) {
    // Regular expression pattern to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method of the regular expression to check if the email matches the pattern
    return emailPattern.test(email);
  }

  const validateForm = () => {
    const newError = {};

    if (!LoginData.Email) {
      error.email = 'Email is required';
    } else if (!isValidEmail(LoginData.Email)) {
      newError.email = 'Invalid email format';
    }

    if (!LoginData.password) {
      newError.password = 'Password is required';
    } else if (LoginData.password.length < 6) {
      newError.password = 'Password must be at least 6 characters long';
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
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



  const onSubmit = () => {
    setLoading(true);
    const isFormValid = validateForm();

    if (isFormValid) {
      auth()
        .signInWithEmailAndPassword(LoginData.Email, LoginData.password)
        .then(userToken => {
          UserTokenSet(userToken.user.uid),
            firestore()
              .collection('UserDetail')
              .where('Email', '==', LoginData.Email)
              .get()
              .then(res => {
                if (res?.docs.length !== 0) {
                  _saveCurrentUserDetail(
                    res?.docs[0].data().Name,
                    res?.docs[0].data().Email,
                    res?.docs[0].data().userId,
                  );
                  setLoading(false);
                } else {
                  Alert.alert(' User not Found');
                  setLoading(false);
                }
              })
              .catch(e => console.log('ERROR in getting Data', e));
        })
        .catch(e => Alert.alert('Soory unable to LogIn'));
      setLoading(false);
    } else {
      setLoading(false);
      console.log('skdks', error);
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

  return (
     
    <KeyboardAwareScrollView style={styles.loginScreenContainer} >

    
      <View style={styles.loginView}>
        <LoginSvg width={wp(78)} height={hp(50)} />
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View>
            <InputComponent
              placeholder="Enter Your Email/Username"
              value={LoginData.Email}
              style={[
                error.email
                  ? {borderColor: COLORS.redColor, borderWidth: 2}
                  : null,
              ]}
              onChangeText={text => setLoginData({...LoginData, Email: text})}
            />
            {error.email ? (
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.redColor,
                  fontSize: Height('2.2%'),
                }}>
                {error.email}
              </Text>
            ) : null}
            <InputComponent
              placeholder="Enter your Password"
              style={[
                error.password
                  ? {borderColor: COLORS.redColor, borderWidth: 2}
                  : null,
              ]}
              secureTextEntry={false}
              onChangeText={text =>
                setLoginData({...LoginData, password: text})
              }
              value={LoginData.password}
            />
            {error.password ? (
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.redColor,
                  fontSize: Height('2.2%'),
                }}>
                {error.password}
              </Text>
            ) : null}
          </View>
        )}

        <Button
          buttonName={'Login'}
          btnStyle={styles.btnName}
          onPress={() => onSubmit()}
        />
      </View>
      <View style={styles.registerView}>
        <Text style={styles.registerText}>Hi New Here!!! </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routesNames.registerationScreen)}>
          <Text style={styles.registerBtn}> Kindly Register</Text>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAwareScrollView>
     
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  loginView: {
    alignItems: 'center',
  },

  btnName: {
    backgroundColor: COLORS.secondaryColor,
    padding: 12,
    height: Height(5),
    width: Width(60),
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: Height(2),
    borderRadius: 12,
  },
  registerView: {
    flexDirection: 'row',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: COLORS.secondaryColor,
    fontSize: Height(1.6),
    fontWeight: '700',
  },
  registerBtn: {
    color: COLORS.whiteColor,
    fontSize: Height(1.6),
    fontWeight: '800',
  },
});
