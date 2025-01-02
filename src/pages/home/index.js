import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {routesNames} from '../../utils/navigation';

import Header from '../../components/header';
import fireStore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderProfile from '../../components/profileHeader';

const Home = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [currentUserDetail, setCurrentUserDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    _getStoredEntity()
   
  }, []);

  useEffect(()=>{
  _getUsers()
  },[currentUserDetail])

const _getStoredEntity=async()=>{
  const result = await AsyncStorage.multiGet(['NAME', 'EMAIL', 'USERID']);
  const userDetails = Object.fromEntries(result);
  console.log('userDetail',userDetails)
  setCurrentUserDetail(userDetails);

}

  const _getUsers = async () => {
    setLoading(true)
   
    try {
      let tempData = [];
      const userDocument = await fireStore()
        .collection('UserDetail')
        .where('Email', '!=', currentUserDetail?.EMAIL)
        .get()
        .then(res => {
          if (res?.docs.length !== 0) {
            res?.docs.map(item => {
              tempData.push(item.data());
            });
          }
          setUserData(tempData);
          setLoading(false)
        })
        .catch(e => console.log(JSON.stringify(e)));
      console.log('ashajs', userDocument._data);
    } catch (e) {
      console.log('akhsjas', e);
    }
  };

  const renderChatItem = ({item}) => {
    const initials = item?.Name.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();



    return (
      <TouchableOpacity
        style={styles.chatContainer}
        onPress={() =>
          navigation.navigate(routesNames.chatDetail, {
            data: item,
            currentUserId: currentUserDetail?.USERID,
          })
        }>
        <View style={[styles.profilePlaceholder, {backgroundColor: 'red'}]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        <View style={styles.chatDetails}>
          <Text style={styles.chatName}>{item?.Name}</Text>
          <Text style={styles.chatEmail}>Hi!!</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const _hnadleProfileNavigation = () => {
    navigation.navigate(routesNames.profilePage, {data: currentUserDetail});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <HeaderProfile
            userName={currentUserDetail?.NAME}
            onProfileIconPress={_hnadleProfileNavigation}
          />
          <FlatList
            data={userData}
            keyExtractor={item => item.userId}
            renderItem={renderChatItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  chatDetails: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 5,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },

  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 10,
  },

  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initials: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatEmail: {
    fontSize: 14,
    color: '#666',
  },
});
