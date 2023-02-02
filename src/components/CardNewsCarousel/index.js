import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';

import { useNavigation } from "@react-navigation/native";

export function CardNewsCaroussel(props) {
    const navigation = useNavigation();
    return(
      <View style={styles.card}>
        <SafeAreaView>
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate('News', {
                  title: props.title,
                  image: props.image,
                  content: props.content,
                  date: props.date
                });
              }}>
            <Image height={170} source={{uri : props.image}} style={styles.cardImage}/>
            <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.whiteBackground,
      width: 'auto',
      zIndex: 0,
      elevation:0,
      borderRadius: 10,
      height: 280,
      marginLeft: 25,
      marginRight: 25,
    },
    cardImage: {
      height: 150,
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
    },
  
  })
  