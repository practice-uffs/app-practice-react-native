import React from 'react';
import { ScrollViewComponent, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { theme } from '../../styles/theme';
import { CardNews } from '../../components/CardNews';
import Routes from '../../routes';
import XMLParser from 'react-xml-parser';
import axios from 'axios';
import { Component } from 'react';

class NewsFeed extends Component {
  constructor(props){   
    super(props);
    this.state = {  
      news: null,
      rendering: true
    }
  }

  componentDidMount(){
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
      this.setState({news: stateFeed, rendering: false});
    });
  }

  displayState = () =>{
    console.log(this.state.news);
  }


  renderCard(item){
    return(
      <CardNews image={'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value} title={item[0].value} date={item[2].value} />
    )
  }

  render(){
    if(this.state.rendering == true){
      return (
        null
      )
    }else{
      return (
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <FlatList
              data={this.state.news}
              renderItem={({item}) => this.renderCard(item)}
            />
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grayBackground,
    height: '100%',
  },
  scroll: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  link: {
    textDecorationLine: "none",
  }
});

export default NewsFeed;
