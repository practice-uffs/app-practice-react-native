import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarioAcademico = () => {
  const [eventos, setEventos] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const obterEventosDoCalendario = async () => {
    try {
      // Substitua a URL abaixo pela rota correta da API
      const response = await fetch('ROTA_API/calendario');
      const data = await response.json();

      const eventosFormatados = {};
      data.forEach(evento => {
        eventosFormatados[evento.data] = { marked: true, dotColor: 'blue', evento: evento.nome };
      });

      setEventos(eventosFormatados);
    } catch (error) {
      console.error('Erro ao obter eventos do calendário:', error);
    }
  };

  useEffect(() => {
    obterEventosDoCalendario();
  }, []);

  return (
    <ScrollView>
      <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Calendário Acadêmico
      </Text>
      <Calendar
        markedDates={eventos}
        markingType="multi-dot"
        theme={{
          todayTextColor: 'blue',
          dayTextColor: 'black',
          textDayFontFamily: 'monospace',
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Detalhes do Evento:</Text>
        {selectedDate && eventos[selectedDate] ? (
          <View>
            <Text style={{ fontSize: 16 }}>{eventos[selectedDate].evento}</Text>
          </View>
        ) : (
          <Text style={{ fontSize: 16 }}>Selecione uma data para ver os detalhes do evento.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default CalendarioAcademico;
