import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import XMLParser from 'react-xml-parser';
import axios from 'axios';
import { CardNewsCarousel } from '../CardNewsCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';


const {width: windowWidth} = Dimensions.get('window');

export default class NoticesCarousel extends Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: []
      }
    }
    
    componentDidMount(){
      AsyncStorage.getItem('carouselItems').then(value => {
      if (value) {                    // verifica se existe noticias no storage, se nao, carrega novamente do site
        const carouselItems = JSON.parse(value);
        this.setState({ carouselItems });
      } else{
        this.loadNews();
      }
      })
      .catch(error => {
        console.log('Erro ao recuperar dados do carrossel do armazenamento:', error);
      });
    }
    
    loadNews(){
      const stateFeed = [];
      axios.get('https:/practice.uffs.edu.br/feed.xml').then((response) => {
        let feed = new XMLParser().parseFromString(response.data);

        feed.children[0].children.forEach(element => {
          if(element.name = 'item'){
            if(element.children.length == 8){
              stateFeed.push(element.children);
            }
          }
        });
        const limit = 50; // Define o limite de 50 itens no carrossel para não haver sobrecarga no app
        const limitedFeed = stateFeed.slice(0, limit);

        this.setState({ carouselItems: limitedFeed });
        // salva os itens carregados no storage
        AsyncStorage.setItem('carouselItems', JSON.stringify(limitedFeed)).then(() => {
          console.log('Dados do carrossel salvos no storage.');
        })
        .catch(error => {
          console.log('Erro ao salvar dados do carrossel no storage:', error);
        });
      });
    }

  renderItem = ({item}) => {
    return (
    <View>
      <CardNewsCarousel 
        title={item[0].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")}
        image={'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value}
        content={item[7].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")}
        date={item[2].value}
      />
    </View>
    )
  };

  render() {
    return (
    <View style={styles.carouselContainer}>
        <Carousel
        style={styles.carousel}
        data={this.state.carouselItems}
        renderItem={this.renderItem}
        itemWidth={windowWidth * 0.8}
        separatorWidth={0}
        containerWidth={windowWidth}
        ref={c => {
            this.numberCarousel = c;
          }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 290,
    backgroundColor: 'transparent'
  },
  item: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
  }
});