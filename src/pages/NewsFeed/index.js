import React from 'react';
import { ScrollViewComponent, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { theme } from '../../styles/theme';
import { CardNews } from '../../components/CardNews';
import Routes from '../../routes';
import XMLParser from 'react-xml-parser';
import axios from 'axios';

export default function NewsFeed() {
  const [ news, setNews ] = React.useState([]);
  const stateFeed = [];

  const getNews = () => {
    axios.get('https:/practice.uffs.edu.br/feed.xml').then((response) => {
      let feed = new XMLParser().parseFromString(response.data);
      feed.children[0].children.forEach(element => {
        if(element.name = 'item'){
          if(element.children.length == 8){
            stateFeed.push(element.children);
            // setNews(stateFeed); //causa do loop 
          }
        }
      });
    });
  }

  if(!stateFeed.length){
    getNews();
  }
  console.log(stateFeed);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
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
