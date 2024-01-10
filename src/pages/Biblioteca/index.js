import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { theme } from '../../styles/theme';

export default function Bib() {
  const info = {
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
    servers: {
        name: 'Daniele Rohr',
        email: 'daniele.rohr@uffs.edu.br',
        secondeName: 'arcos Eugenio Franceschi',
        secondeEmail: ' marcos.franceschi@uffs.edu.br'
    },
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biblioteca do Campus Chapecó</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações básicas</Text>
        <Text style={styles.justifyText}>A Biblioteca do Campus Chapecó ocupa uma área total de 694,31 m², dividida em dois ambientes:</Text>
        <View style={{ height: 10 }} />
        <Text style={styles.justifyText}>a) Salão Principal:</Text>
        <Text style={styles.infoText}>Compreende uma área de 503,85 m² e é composto pelo acervo geral, de referência, periódicos, computadores de mesa para estudos e para consulta ao acervo, balcão de informações e empréstimos, sala de processamento técnico e de serviço de referência.</Text>
        <Text style={styles.justifyText}>b) Sala de Estudos:</Text>
        <Text style={styles.infoText}>Compreende uma área de 190,56 m² e é composto por mesas e cadeiras para estudos e “pegue e leve” da biblioteca.</Text>
      </View>
      
      <View>
        <Text style={styles.infoText}>O setor é aberto a toda comunidade, inclusive externa, com a oferta de serviços como: acesso a computadores, consulta local e visita guiada. Porém os empréstimos domiciliares são realizados apenas para usuários com vínculo ativo com a UFFS, e mediante cadastro prévio.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Agenda:</Text>
        <Text style={styles.infoText}>Horário de funcionamento (segunda a sexta-feira):</Text>
        {info.horarios.map((horario, index) => (
            <View key={index} style={styles.listItem}>
                <Text style={styles.listItemBullet}>     •</Text>
                <Text style={styles.infoText}>{horario}</Text>
            </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Telefone:</Text>
        <Text style={styles.infoText}>{info.telefone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localização:</Text>
        <Text style={styles.infoText}>{info.sala}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chefe da Assessoria de Bibliotecas do Campus Chapecó</Text>
        <Text style={styles.infoText}>Nome: {info.chefe.nome}</Text>
        <Text style={styles.infoText}>Telefone: {info.chefe.telefone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servidores</Text>
        <Text style={styles.infoText}>Nome: {info.servers.name}</Text>
        <Text style={styles.infoText}>Email: {info.servers.email}</Text>
        <View style={{ height: 10 }} />
        <Text style={styles.infoText}>Nome: {info.servers.name}</Text>
        <Text style={styles.infoText}>Email: {info.servers.email}</Text>
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
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  listItemBullet: {
    fontSize: 16,
    marginRight: 5,
    color: 'black', 
  }
});