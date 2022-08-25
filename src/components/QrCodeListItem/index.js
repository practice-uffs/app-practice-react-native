import React from 'react'
import {StyleSheet, Alert, Text, TouchableOpacity, Linking } from 'react-native'


export default function ListItem({ data }){
  async function handleUrl () {
    const supported = await Linking.canOpenURL(data.code);

    if (supported) {
      await Linking.openURL(data.code);
    } else {
      Alert.alert(
        "Ops!",
        `Não foi possível se redirecionar para: ${data.code}`,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleUrl}> 
      <Text>{data.code}</Text>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8, 
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2
  }
})