import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/colorHelper'
import { Height, Width } from '../utils/dimention'

const Button = ({btnStyle,onPress,btnText,buttonName}) => {
  return (
    <TouchableOpacity
    style={btnStyle ? btnStyle : styles.btnName}
    onPress={onPress}>
    <Text style={btnText ? btnText : styles.btnText}>{buttonName}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
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
      btnText: {
        color: COLORS.primaryColor,
        fontWeight: '700',
        fontSize: Height(1.5),
        textAlign: 'center',
      },
})