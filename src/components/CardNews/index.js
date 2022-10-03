import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';

import { useNavigation } from "@react-navigation/native";

export function CardNews(props) {
  const navigation = useNavigation();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    // 👇️ toggle
    setIsExpanded(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  }

  return(
    <View style={[styles.card, styles.shadow ]}>
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity 
            onPress={() => {
              navigation.navigate('News', {
                title: props.title,
                image: props.image,
                content: props.content,
                date: props.date
              });
            }}>
            <Image style={styles.image} height="300px" source={{uri : props.image}} />
            <Text style={styles.title}>{props.title}</Text>
           
            <Text style={styles.date}>{formatDate(props.date)}</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );

  function formatDate(date){
		date = date.split(" ");
		date = new Date(Date.parse(date[2] + " " + date[1] + ", " + date[3]));
		const options = { year: "numeric", month: "long", day: "numeric"};
		date = date.toLocaleDateString(undefined, options);
		return date.toUpperCase().charAt(0).toUpperCase() + date.slice(1);
	}
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.whiteBackground,
    width: 'auto',
    minHeight: 350,
    margin: 10,
    marginBottom: 20,
    paddingBottom: 20,
    borderRadius: 10,
    zIndex: 0,
    elevation:0
  },

  image: {
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontSize: 16,
  },
  date: {
    margin: 10,
    marginLeft: 20,
    marginTop: 0,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  textHidden: {
    display: 'none'
  },
  textVisible: {
    margin: 20
  }

})
