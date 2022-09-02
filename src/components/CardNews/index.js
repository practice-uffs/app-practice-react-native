import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { Card } from 'react-native-paper';
import { theme } from '../../styles/theme';


class CardNews extends React.Component {
  constructor(props){   
    super(props);
    this.state = {
      image: props.image,
      title: props.title,
      date: props.date,
    };
  }

  formatDate(date){
		date = date.split(" ");
		date = new Date(Date.parse(date[2] + " " + date[1] + ", " + date[3]));
		const options = { year: "numeric", month: "long", day: "numeric"};
		date = date.toLocaleDateString(undefined, options);
		return date.toUpperCase().charAt(0).toUpperCase() + date.slice(1);
	}

  render(){
    return (
      <View style={[styles.card, styles.shadow]}>
          <Image style={styles.image}  source={this.state.image} />
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.date}>{this.formatDate(this.state.date)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.whiteBackground,
    width: 'auto',
    height: 'auto',
    minHeight: '300px',
    margin: '10px',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderRadius: '10px',
  },
  image: {
    width: '100%',
    minHeight: '200px',
    height: '',
    borderTopEndRadius: '10px',
    borderTopStartRadius: '10px'
  },
  title: {
    marginHorizontal: '20px',
    marginVertical: '20px',
    marginLeft: '20px',
    fontWeight: 'bold',
    lineHeight: '22px',
    fontSize:'16px',
  },
  date: {
    margin: '10px',
    marginLeft: '20px',
    marginTop: '0px',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
  }
})

export { CardNews };