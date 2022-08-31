import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';
import { AuthContext } from '../../context/auth';

export default function Services() {
  const {nome} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Aqui ficariam os serviços do MURAL :)</Text>
      <Text>Nome: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
