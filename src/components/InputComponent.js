import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/colorHelper'
import { Height, Width } from '../utils/dimention'


const InputComponent = (props) => {
    const {placeholder='',value='',onChangeText=()=>{},secureTextEntry=false,keyboardType='',style}=props
  return (
    <View style={styles.inputContainer}>
        <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
       style={style}
        // keyboardType={keyboardType}
      />
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:COLORS.whiteColor,
        color:COLORS.blackColor,
        width:Width(80),
        borderRadius:6,
        marginVertical:6,
        paddingVertical:6
    }
})