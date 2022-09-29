import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';

const Drawer = createDrawerNavigator()
import { AuthContext } from '../../context/auth';

export default function Services({navigation}) {
  const {nome} = useContext(AuthContext);

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
