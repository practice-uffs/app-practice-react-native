import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          style={ styles.button } 
          onPress= { () => navigation.navigate('Welcome') }
        >
          <Text style={styles.buttonTextBack}> 
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
      <Animatable.Image 
          animation="flipInY"
          source={require('../../assets/practice/practice-dark.png')} 
          style={styles.logoPractice}
          resizeMode="contain"/>

      <Animatable.View style={styles.containerHeader} animation="fadeInLeft" delay={400}>
        <Text style={ styles.message }>Entre com o seu idUFFS e senha</Text>
      </Animatable.View>  
      
      <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={400}>
        <Text style={ styles.iduffs }>IDUffs</Text>
        <TextInput 
          placeholder= "idUFFS"
          style= {styles.input}
        />
        <Text style={ styles.senha }>Senha</Text>
        <TextInput 
          placeholder= "Sua Senha"
          style= {styles.input}
        />
        <TouchableOpacity 
          onPress= { () => navigation.navigate('TabNavigator')}
        >
          <Text style={ styles.buttonText }>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>  

    </View>
  );
} 

const styles = StyleSheet.create({
  backContainer:{
    width: '100%'
  },
  button:{
    width: '20%',
    marginLeft: 20
  },
  buttonText:{
    marginTop: 25,
    color: '#4388a5',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonTextBack:{
    marginTop: 25,
    color: '#4388a5',
    fontWeight: 'bold',
    fontSize: 14
  },
  container: {
    flex: 2,
    backgroundColor: theme.colors.whiteBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    width: '60%',
    flex:1,
 
  },
  containerForm: {
    flex: 3,
    width: '100%',
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  iduffs: {
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12
  },
  logoPractice: {
    flex: 2,
    width: '80%',
  },
  message: {
    marginTop: 10,
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
  },
  senha:{
    fontSize: 20,
  }
});
