import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { theme } from '../../styles/theme';

export default function Horarios() {
    const horarios = [
        { linha: 'TOMAZELLI / FAG / UNIVERSIDADE FEDERAL / THIAGO VILA PÁSCOA / VILA ESPERANÇA / FACH II.', horario: '04:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '06:35:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '06:55:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '07:20:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '07:30:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '08:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '09:10:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '10:10:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '11:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '12:00:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '13:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '13:40:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '14:30:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '16:25:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '17:35:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '18:05:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '20:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '21:15:00' },
        { linha: '24- UNIVERSIDADE FEDERAL', horario: '21:45:00' },
        
      ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horários de Ônibus</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {horarios.map((item, index) => (
          <View key={index} style={styles.horarioContainer}>
            <Text style={styles.linhaText}>{item.linha}</Text>
            <Text style={styles.horarioText}>{item.horario}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.lightOrange,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    scrollViewContent: {
      paddingVertical: 10,
    },
    horarioContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    linhaText: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
    },
    horarioText: {
      fontSize: 16,
      marginRight: 10,
    },
    showMoreText: {
      color: 'blue',
    },
  });