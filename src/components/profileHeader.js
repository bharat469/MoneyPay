import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const HeaderProfile = ({ userName='', onProfileIconPress=()=>{} }) => {
    const initials = userName&& userName?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.welcomeText}>Welcome, {userName||'GUEST'}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onProfileIconPress}>
        <View style={[styles.profilePlaceholder, { backgroundColor: 'blue' }]}>
        <Text style={styles.initials}>{initials}</Text>
      </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default HeaderProfile;
