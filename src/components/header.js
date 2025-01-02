import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Height} from '../utils/dimention';
import { COLORS } from '../utils/colorHelper';
import ArrowLeft from '../assets/ArrowLeft.svg'

const Header = props => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={props.onPress}>
      <ArrowLeft/>
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.headerName}</Text>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.whiteColor,
    padding: 12,
  },
  headerText: {
    color: COLORS.primaryColor,
    fontSize: Height(1.9),
  },
});
