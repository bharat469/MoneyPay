import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colorHelper'

const BasicWrapper = (props) => {
 let {children}=props
  return (
    <View style={styles.BasicWrapperStyle}>
     {children}
    </View>
  )
}

export default BasicWrapper

const styles = StyleSheet.create({
    BasicWrapperStyle:{
        flex:1,
        backgroundColor:COLORS.primaryColor
    }
})