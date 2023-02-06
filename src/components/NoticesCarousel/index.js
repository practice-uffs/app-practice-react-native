import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import XMLParser from 'react-xml-parser';
import axios from 'axios';


const {width: windowWidth} = Dimensions.get('window');

export default class NumberCarousel extends Component {

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
    <View style={styles.card}>
        <SafeAreaView>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('News', {
                      title: item[0].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"),
                      image: 'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value,
                      content: item[7].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'"),
                      date: item[2].value
                });
            }}>
            <Image height={170} source={{uri : 'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value}} style={styles.cardImage}/>
            <Text style={styles.title}>{item[0].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")}</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
  image: {
    height: 170,
    width: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: 'auto',
    zIndex: 0,
    elevation:0,
    borderRadius: 10,
    height: 300,
    marginLeft: 25,
    marginRight: 25,
  },
  cardImage: {
    height: 180,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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