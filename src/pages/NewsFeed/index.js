import React from 'react';
import { ScrollViewComponent, StyleSheet, Text, View, ScrollView } from 'react-native';
import { theme } from '../../styles/theme';
import { CardNews } from '../../components/CardNews';
import Routes from '../../routes';

export default function NewsFeed() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <a href={Routes('Welcome')} style={styles.link}>
          <CardNews image={require('../../assets/background/montanhas.png')} title="Bolsistas Bolsistas Bolsistas Bolsistas Bolsistas Bolsistas do practice atendem livre da comunidade acadêmica" date="9 de agosto de 2022" />
        </a>
        <CardNews onClick={'Welcome'} image={require('../../assets/background/montanhas.png')} title="Bolsistas Bolsistas Bolsistas Bolsistas Bolsistas Bolsistas do practice atendem livre da comunidade acadêmica" date="9 de agosto de 2022" />
        <CardNews onClick={'Welcome'} image={require('../../assets/background/montanhas.png')} title="Teste de notícia" date="22 de agosto de 2022" />
        <CardNews onClick={'Welcome'} image={require('../../assets/background/montanhas.png')} title="Nova Notícia" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grayBackground,
    height: '100%',
    overflow: 'scroll',
  },
  scroll: {
    padding: '10px',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  link: {
    textDecorationLine: "none",
  }
});
