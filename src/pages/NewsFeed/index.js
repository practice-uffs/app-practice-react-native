import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button} from 'react-native';
import { theme } from '../../styles/theme';
import { CardNews } from '../../components/CardNews';
import XMLParser from 'react-xml-parser';
import axios from 'axios';

class NewsFeed extends Component {
  constructor(props){   
    super(props);
    this.state = {  
      news: [],
      rendering: true
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
      this.setState({news: stateFeed, rendering: false});
    });
  }

  displayState = () =>{
    console.log(this.state.news);
  }

  renderCard(item){
    return(
      <CardNews 
      image={'https://practice.uffs.edu.br'+(item[6].children[0].value[0] != '/' ? '/images/' : '')+item[6].children[0].value} 
      content={item[7].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")} 
      title={item[0].value.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'")} 
      date={item[2].value} />
    )
  }

  render(){
    if(this.state.rendering == true || this.state.news == undefined){
      return (
        <Text>Carregando</Text>
      )
    }else{
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.news}
            renderItem={({item}) => this.renderCard(item)}
          />
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
    paddingTop: 20,
    paddingBottom: 20,
  },
  link: {
    textDecorationLine: "none",
  }
});

export default NewsFeed;
