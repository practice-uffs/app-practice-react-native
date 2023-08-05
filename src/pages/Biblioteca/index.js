import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { theme } from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

export default function Biblioteca() {
   const bibliotecaSiteURL = 'https://www.uffs.edu.br/campi/chapeco/biblioteca/biblioteca-do-campus';
      const handleOpenURL = () => {
        Linking.openURL(bibliotecaSiteURL);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Biblioteca do Campus Chapecó</Text>

      <Text style={styles.sectionHeading}>Competência:</Text>
      <Text style={styles.info}>
        A Biblioteca do Campus Chapecó ocupa uma área total de 694,31 m², dividida em dois ambientes:
      </Text>

      <Text style = {styles.info}>
      a) salão principal: compreende uma área de 503,85 m² e é composto pelo acervo geral, de referência, periódicos, computadores de mesa para estudos e para consulta ao acervo, balcão de informações e empréstimos, sala de processamento técnico e de serviço de referência;
      </Text>

      <Text style={styles.info}>
        b) Sala de estudos: compreende uma área de 190,56 m² e é composta por mesas e cadeiras para estudos e “pegue e leve” da biblioteca.
      </Text>
      <Text>{'\n'}</Text>
      <Text style={styles.info}>
        O acervo é periodicamente atualizado com materiais que atendam às áreas de atuação do Campus, bem como às áreas históricas e de literaturas. Também conta com diversos suportes informacionais, como livros, periódicos, CDs, DVDs e folhetos. Além do acesso físico a materiais, é possível acessar conteúdos digitais, através do Portal de Periódicos da CAPES, Repositório Digital da UFFS, Portal de Periódicos da UFFS e bases de dados adquiridas pela instituição.
      </Text>
      <Text>{'\n'}</Text>
      <Text style={styles.info}>
      O setor é aberto a toda comunidade, inclusive externa, com a oferta de serviços como: acesso a computadores, consulta local e visita guiada. Porém os empréstimos domiciliares são realizados apenas para usuários com vínculo ativo com a UFFS, e mediante cadastro prévio.
      </Text>
      <Text style={styles.sectionHeading}>Agenda:</Text>
      <Text style={styles.info}>
      Horário de funcionamento (segunda a sexta-feira):
      </Text>
      <View style={styles.infoContainer}>
        <Feather name="clock" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>7h30 às 11h30</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="clock" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>12h30 às 17h30</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="clock" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>18h30 às 22h30</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="phone" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>(49) 2049 6482 / 2049 6483 / 2049 6484</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Voip: #27</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>bibio.ch@uffs.edu.br</Text>
      
      </View>
      <View style={styles.infoContainer}>
        <Feather name="map-pin" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>Sala 105 - Bloco da Biblioteca</Text>
      </View>

      <Text style={styles.sectionHeading}>Chefe da Assessoria de Bibliotecas do Campus Chapecó:</Text>
      <Text style={styles.info}>
        Nome: Marcos Eugenio Franceschi
      </Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>marcos.Franceschi@uffs.edu.br</Text>
      </View>

      <View style={styles.infoContainer}>
        <Feather name="phone" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>(49) 2049-3717</Text>
      </View>

      <Text style={styles.sectionHeading}>Servidores:</Text>
      <Text style={styles.boldInfo}>Daniele Rohr</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>daniele.rohr@uffs.edu.br</Text>
      </View>
      <Text>{'\n'}</Text>
      <Text style={styles.boldInfo}>Jacir Gaio</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>jacir.gaio@uffs.edu.br</Text>
      </View>
      <Text>{'\n'}</Text>
      <Text style={styles.boldInfo}>Loivo Antonio Lemes</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>loivo@uffs.edu.br</Text>
      </View>

      <Text>{'\n'}</Text>
      <Text style={styles.boldInfo}>Marcio Fabiano Comachio</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>marcio.comachio@uffs.edu.br</Text>
      </View>

      <Text>{'\n'}</Text>
      <Text style={styles.boldInfo}>Marcos Eugenio Franceschi</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>marcos.franceschi@uffs.edu.br</Text>
      </View>

      <Text>{'\n'}</Text>
      <Text style={styles.boldInfo}>Rafael Pinheiro de Almeida</Text>
      <View style={styles.infoContainer}>
        <Feather name="mail" size={20} color={theme.colors.primary} style={styles.icon} />
        <Text style={styles.info}>rafael.almeida@uffs.edu.br</Text>
      </View>
      <Text style={styles.link} onPress={handleOpenURL}>
        Acesse o site da biblioteca para mais informações.
      </Text>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightOrange,
      padding: 20,
      alignItems: 'center',
    },
    pageTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.primary,
    },
    info: {
      fontSize: 16,
      marginBottom: 10,
      color: theme.colors.text,
    },
    boldInfo: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.text,
    },
    sectionHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 15,
      color: theme.colors.secondary,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    icon: {
      marginRight: 5,
    },
    link: {
      fontSize: 16,
      color: theme.colors.primary,
      textDecorationLine: 'underline',
      marginTop: 10,
    },
  });
  