import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/practice/welcome-background.png')} 
        resizeMode="cover" 
        style={styles.backgroundImage}>
        <View style={styles.containerLogoUffs}>
          <Animatable.Image 
            animation="bounce"
            source={require('../../assets/icons/uffs.png')} 
            style={styles.logoUffs}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerLogo}>
          <Animatable.Image  
            animation="bounce"
            source={require('../../assets/practice/logo-light.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>


        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title} >PREPARE-SE PARA A INOVAÇÂO</Text>
          <Text style={styles.subTitle} >Descubra um ambiente interativo e dinâmico para elevar sua vida acadêmica a um novo patamar</Text>
          <TouchableOpacity 
            onPress= { () => navigation.navigate('SignIn') }
            style={styles.button}>
            <Text style={styles.buttonText}> 
              ACESSAR COM O SEU IDUFFS
            </Text>
          </TouchableOpacity>
        </Animatable.View>


      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    justifyContent: "center",
    width: '100%',
  },
  button: { 
    position: 'absolute',
    backgroundColor: '#4388a5',
    borderRadius: 5,
    paddingVertical: 15,
    width: '100%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerForm: {
    padding: 30,
    flex: 4,
    alignItems: 'center',
    
  },
  containerLogo: {
    flex: 3,
    width: "100%",
    height: "70%",
    alignItems: 'center',
  },
  containerLogoUffs: {
    flex: 2,
    width: "100%",
    height: "30%",
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    height: '80%',
    width: '80%',
  },
  logoUffs: {
    marginTop: 20,
    height: '50%',
    width: '100%',
  },
  subTitle: {
    color: '#a1a1a1',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    margin: 10,
    fontSize: 30, 
  },
  
  
});
