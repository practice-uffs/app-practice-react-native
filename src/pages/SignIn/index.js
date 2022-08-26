import React, { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stack, TextInput, Button } from "@react-native-material/core";
import { theme } from '../../styles/theme';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';
import API from '../../services/api';

import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation();

  async function login() {
    setLoading(true);
    await API.requestLogin(username, password);
    setLoading(false);
  }

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
        <TextInput
        label="idUFFS"
        variant="standard"
        placeholder= "ex: alisson.peloso"
        onChangeText={username => setUsername(username)}
        />
        <TextInput 
        secureTextEntry={true}
        label="Senha"
        variant="standard"
        onChangeText={password => setPassword(password)}
        />
        <Button variant="text"
          title="Entrar"
          loading={loading}
          loadingIndicatorPosition="overlay"
          onPress={login}
          />
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
