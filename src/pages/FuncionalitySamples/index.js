import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function FuncionalitySamples() {
  return (
    <View style={styles.container}>
        <Text>Aqui ficariam os exemplos de funcionalidades presentes no app desenvolvido em framework7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blackBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
