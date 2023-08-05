import React from 'react';
import { StyleSheet, Text, View,  ScrollView  } from 'react-native';
import { theme } from '../../styles/theme';

export default function Horario() {
  const busScheduleData = [
    { time: '04:15:00', destination: 'TOMAZELLI / FAG / UNIVERSIDADE FEDERAL / THIAGO VILA PÁSCOA / VILA ESPERANÇA / FACH II' },
    { time: '06:35:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '06:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '06:55:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:00:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:10:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:20:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:25:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:35:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '07:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '08:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '09:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '10:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '11:25:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '11:55:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '12:35:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '13:05:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '13:40:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '14:35:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '15:50:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '16:00:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '16:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '16:30:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '16:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '17:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '17:35:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '17:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '17:55:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:05:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:10:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:20:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:30:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '17:55:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:05:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:10:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:20:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:30:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '18:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '19:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '20:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '20:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '21:15:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '21:45:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '21:55:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '22:05:00', destination: 'UNIVERSIDADE FEDERAL' },
    { time: '22:15:00', destination: 'UNIVERSIDADE FEDERAL' },
   
    
  ];

  return (
    <View style={styles.container}>
      <BusSchedule busScheduleData={busScheduleData} />
    </View>
  );
}

function BusSchedule({ busScheduleData }) {
  return (
    <View style={styles.busScheduleContainer}>
    <Text style={styles.busScheduleTitle}>Horários de ônibus</Text>
      <View style={styles.busScheduleList}>
        <ScrollView style={styles.busScheduleList}>
            {busScheduleData.map((bus, index) => (
                <Text key={index} style={styles.busScheduleItem}>
                    {bus.time} - {bus.destination}
                </Text>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.success,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    busScheduleContainer: {
      flex: 1,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      paddingVertical: 0,
      paddingHorizontal: 16,
    },
    busScheduleTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    busScheduleList: {
      flex: 1,
    },
    busScheduleItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.lightGray,
      paddingVertical: 10,
    },
    busScheduleTime: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
    },
    busScheduleDestination: {
      fontSize: 16,
      flex: 3,
      marginLeft: 10,
    },
  });
