import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function QrCode() {
  return (
    <View style={styles.container}>
        <Text>Aqui ficaria a parte da leitura de qr codes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
