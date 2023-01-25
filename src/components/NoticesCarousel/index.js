import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import XMLParser from 'react-xml-parser';
import axios from 'axios';
import { CardNewsCaroussel } from '../CardNewsCarrousel';

export default class NoticesCarousel extends React.Component {

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

    _renderItem({item}){
        return (
          <CardNewsCaroussel
            image={'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value} 
            content={item[7].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")} 
            title={item[0].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")} 
            date={item[2].value}
          />
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
})