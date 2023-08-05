import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { theme } from '../../styles/theme';

export default function Biblio() {
  const libraryInfo = {
    horarios: [
      '7h30 às 11h30',
      '12h30 às 17h30',
      '18h30 às 22h30'
    ],
    telefone: '(49) 2049 6482 / 2049 6483 / 2049 6484',
    voip: '#27',
    sala: 'Sala 105 - Bloco da Biblioteca',
    chefe: {
      nome: 'Marcos Eugenio Franceschi',
      telefone: '(49) 2049-3717'
    },
    site: 'https://www.uffs.edu.br/campi/chapeco/biblioteca/biblioteca-do-campus' // Substitua pelo link real do site da biblioteca
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biblioteca UFFS</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações da Biblioteca</Text>
        <Text style={styles.justifyText}>A Biblioteca do Campus Chapecó ocupa uma área total de 694,31 m², dividida em dois ambientes:</Text>
        <Text style={styles.justifyText}>a) Salão Principal:</Text>
        <Text style={styles.infoText}>Compreende uma área de 503,85 m² e é composto pelo acervo geral, de referência, periódicos, computadores de mesa para estudos e para consulta ao acervo, balcão de informações e empréstimos, sala de processamento técnico e de serviço de referência.</Text>
        <Text style={styles.justifyText}>b) Sala de Estudos:</Text>
        <Text style={styles.infoText}>Compreende uma área de 190,56 m² e é composto por mesas e cadeiras para estudos e “pegue e leve” da biblioteca.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horários de Funcionamento:</Text>
        {libraryInfo.horarios.map((horario, index) => (
          <Text key={index} style={styles.infoText}>
            {horario}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Telefone:</Text>
        <Text style={styles.infoText}>{libraryInfo.telefone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localização:</Text>
        <Text style={styles.infoText}>{libraryInfo.sala}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chefe da Biblioteca:</Text>
        <Text style={styles.infoText}>Nome: {libraryInfo.chefe.nome}</Text>
        <Text style={styles.infoText}>Telefone: {libraryInfo.chefe.telefone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Site da Biblioteca:</Text>
        <TouchableOpacity onPress={() => handleLinkPress(libraryInfo.site)}>
          <Text style={styles.linkText}>{libraryInfo.site}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.success,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.primary, 
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.secondary, 
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: theme.colors.text, 
  },
  linkText: {
    fontSize: 16,
    color: theme.colors.primary,
    textDecorationLine: 'underline'
  },
  justifyText: {
    textAlign: 'justify',
    color: theme.colors.text,
  }
});
