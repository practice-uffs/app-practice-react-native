import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function Services() {
  return (
    <View style={styles.container}>
        <Text>Aqui ficariam os serviços do MURAL :)</Text>
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
