import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { theme } from '../../styles/theme'

LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'],
    dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    today: "Hoje é"
  };
  LocaleConfig.defaultLocale = 'br';

  export default function AcademicCalendar({ }) {
    return (
        <Calendar
        style={{ backgroundColor: 'transparent' }}
        theme={{ 
            calendarBackground:  'transparent',
            arrowColor: theme.colors.darkBlue,
         }}

        markingType={'period'}
        markedDates={{
          '2022-11-22': {startingDay: true, color: theme.colors.lightOrange, endingDay: true},
          '2022-12-21': {startingDay: true, color: theme.colors.lightOrange, textColor: 'white'},
          '2022-12-22': {color: theme.colors.lightOrange, textColor: 'white'},
          '2022-12-23': {color: theme.colors.lightOrange, textColor: 'white', marked: true, dotColor: 'white'},
          '2022-12-24': {color: theme.colors.lightOrange, textColor: 'white'},
          '2022-12-25': {endingDay: true, color: theme.colors.lightOrange, textColor: 'white'}
        }}
        />
    );
}