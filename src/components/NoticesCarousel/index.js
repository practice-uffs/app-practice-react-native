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
      this.loadNews();
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
        this.setState({ carouselItems: stateFeed });
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