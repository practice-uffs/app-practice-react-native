import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';

const Drawer = createDrawerNavigator()

export default function Services() {
  return (
    <View style={styles.container}>
        <Text>Aqui ficariam os exemplos de funcionalidades De serviços do mural</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
