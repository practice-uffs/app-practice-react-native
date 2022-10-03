import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../styles/theme';
import { useNavigation } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";

function News({route}){
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  // var textElem = React.createElement(Text, styles.content, [route.params.content]);

  const source = {
    html: `
    <div style='line-height: 28px;'>`+route.params.content+`</h3>`
  };

  const titleSource = {
    html: `<p style='font-weight: bold;'>`+route.params.title+`</p>`
  };

  return(
    <View style={[styles.card, styles.shadow, styles.cardExpanded]}>
      <SafeAreaView>
      <View style={styles.closeButton}>
            <Icon.Button
              style={[styles.iconClose]}
              name="closecircleo"
              size={30}
              width={40}
              padding={0}
              margin={0}
              alignContent='center'
              backgroundColor='transparent'
              backgroundPosition='center'
              onPress={() => navigation.goBack()}
              color='black'
              ></Icon.Button>
          </View>
        <ScrollView>       
          <Image style={styles.image} height="300px" source={{uri : route.params.image}} />
          <View style={styles.title}>
            <RenderHtml
                contentWidth={width}
                source={titleSource}
              />
          </View>
          <Text style={styles.date}>{formatDate(route.params.date)}</Text>
          <View style={styles.content}>
              <RenderHtml
                contentWidth={width}
                source={source}
              />
          </View>
        
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function formatDate(date){
  date = date.split(" ");
  date = new Date(Date.parse(date[2] + " " + date[1] + ", " + date[3]));
  const options = { year: "numeric", month: "long", day: "numeric"};
  date = date.toLocaleDateString(undefined, options);
  return date.toUpperCase().charAt(0).toUpperCase() + date.slice(1);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.whiteBackground,
    width: 'auto',
    flex:1,
    paddingBottom: 50,
    borderRadius: 10,
    zIndex: 0,
    elevation:0
  },
  image: {
    height: 250,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontSize: 16,
  },
  date: {
    marginLeft: 20,
    marginTop: 5,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  content: {
    margin: 20,
    lineHeight:26,
    color: 'black',
    height: 'auto',
    float: 'left',
  },
  textVisible: {
    margin: 20
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin:10,
    splashColor: 'white',
    highlightColor: 'white',
    width: 'auto'
  },
  iconClose:{
    width: 'auto',
    alignContent: 'center',
    width:40,
    highlightColor: 'transparent',  
    splashColor: 'transparent',
  }
})


export default News;
