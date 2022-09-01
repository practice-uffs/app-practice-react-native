import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../../styles/theme';


export function CardNews(props) {
  return (
    <View style={[styles.card, styles.shadow]}>
        <Image style={styles.image}  source={props.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.whiteBackground,
    width: '100%',
    height: 'auto',
    minHeight: '300px',
    margin: '0px',
    marginBottom: '20px',
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
    margin: '10px',
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
    shadowRadius: 10
  }
})
