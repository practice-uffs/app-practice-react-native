import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

import { styles } from './styles';

import axios from "axios";
import * as rssParser from 'react-native-rss-parser';
import { Api } from '../../api/api';


export function NewsFeed({ navigation}: any) {

  const baseURL = "https://practice.uffs.edu.br/feed.xml";
  const [post, setPost] = useState({});


  console.log("teste1")
  useEffect(() => {


    // request da API do practice em F7
    // Api.getNews().then((news: any) => {
    //   setPost({ news });
    // }).catch(() => {
    //   console.log('deu erro');
    // });

    // axios({
    //   method: 'get',
    //   url: `${baseURL}`,
    //   headers: {
    //     'Content-Type': 'application/rss+xml'
    //   },
    //   httpsAgent: {
    //     rejectUnauthorized: false
    //   },
    // }).then((response) => {
    //   console.log('axios1', response.data);
    // });
  
    // fetch(baseURL)
    //   .then(response => response.text())
    //   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    //   .then(data => console.log('fetch: ', data))


    // fetch(baseURL)
    //   .then((response) => response.text())
    //   .then(async (responseData) => {
    //     const rss = await rssParser.parse(responseData);
    //     console.log('NovoTeste', rss);
    //   });

  }, []);
  console.log("teste2")

  

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}