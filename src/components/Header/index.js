import React from 'react'

import {StyleSheet, View, Text } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'



export default function Header() {
  const  openMenu = () => {
    // navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View>
          <Text style={styles.headerText}>Practice</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position: 'absolute',
        right: 16
    }
})