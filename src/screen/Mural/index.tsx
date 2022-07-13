import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Mural({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>
          Enviar Feedback
        </Text>
      </TouchableOpacity>
    </View>
  );
}