import React, { useState, useContext, useEffect }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, IconButton, Snackbar } from "@react-native-material/core";
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../context/auth';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Picker} from '@react-native-picker/picker';
import CountDown from 'react-native-countdown-component';


import {
	LOGIN_ATTEMPTS,
  TIMEOUT_LOGIN
} from '@env';

export default function SignIn({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { signIn } = useContext(AuthContext);
  const [campus, setCampus] = useState('cerro-largo');
  const [attempts, setAttempts] = useState(LOGIN_ATTEMPTS);
  const [timeoutLogin, setTimeoutLogin] = useState(TIMEOUT_LOGIN);
  const [disabledLogin, setDisabledLogin] = useState(false);
  
  async function login({navigation}) {
    setLoading(true);

    let signned = await signIn(username, password, campus);
    if (!signned) {
     
      //login lock control
      if (attempts <= 1) {
        setAttempts(attempts-1);
        setTimeoutLogin(TIMEOUT_LOGIN);
        setDisabledLogin(true);
      }else{
        setAttempts(attempts-1);
      }
      setErrorMessage("Erro ao efetuar o Login");
    }
    setLoading(false);   
  }

  //this will reset lock login
  async function unlockLogin(){
    setDisabledLogin(false);
    setAttempts(LOGIN_ATTEMPTS);
    setTimeoutLogin(TIMEOUT_LOGIN);
  }

  //this listen lock login to decrement timer
  useEffect(() => {
    if(disabledLogin && timeoutLogin > 0){
      setTimeout(function(){ setTimeoutLogin(timeoutLogin-1) }, 1000);
    }else{
      unlockLogin();
    }

  }, [timeoutLogin, disabledLogin]);

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
        resizeMode="contain"
      />

      <Animatable.View style={styles.containerHeader} animation="fadeInLeft" delay={400}>
        <Text style={ styles.message }>Entre com o seu idUFFS e senha</Text>
      </Animatable.View>
      
      <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={400}>
        <View style={[styles.input, {borderColor: '#333', borderBottomWidth: 1}] }>
          <Picker
            mode={"dropdown"}
            name='Campus'
            selectedValue={campus}
            onValueChange={(itemValue, itemIndex) =>
              setCampus(itemValue)
            }>
            <Picker.Item label="Cerro Largo" value="cerro-largo" />
            <Picker.Item label="Chapecó" value="chapeco" />
            <Picker.Item label="Erechim" value="erechim" />
            <Picker.Item label="Laranjeiras do Sul" value="laranjeiras-do-sul" />
            <Picker.Item label="Passo Fundo" value="passo-fundo" />
            <Picker.Item label="Realeza" value="realeza" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          name='idUFFS'
          label="idUFFS"
          variant="standard"
          value={username}
          placeholder= "ex: alisson.peloso"
          onChangeText={username => setUsername(username)}
          autoComplete="username"
          autoFocus
          keyboardType="text"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={!showPass}
          name='passIdUFFS'
          label="Senha"
          variant="standard"
          onChangeText={password => setPassword(password)}
          value={password}
          trailing = {
            props => (
              <IconButton icon = {
                props => showPass? <Icon name="eye-off" {...props}/> : <Icon name="eye" {...props}/>} 
                onPress={() => setShowPass(!showPass)}
              />
            )
          }
          editable={!loading}
        />

        {disabledLogin && 
        <View style={[styles.blockedLoginMessage]}>
          <Text style={{float:'left', width: 'auto', paddingRight: 10}}>Bloqueado por: {timeoutLogin} segundos</Text>
        </View>  
        }

        {!disabledLogin && 
        <View style={styles.blockedLoginMessage}><Text>Tentativas restantes: { attempts }</Text></View>
        }

        <Button variant="text"
          disabled={(username == '' || password=='' || !campus || disabledLogin || loading )}
          title="Entrar"
          loading={loading}
          loadingIndicatorPosition="overlay"
          onPress={login}
          />
      </Animatable.View>
      
      {errorMessage ?
        <Snackbar
          message={errorMessage}
          action={<Button variant="text" title="Fechar" compact onPress={() => setErrorMessage(null)}/>}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        /> : null
      }
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
    flex: 1,
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
    marginBottom: 20, 
    paddingLeft: 0

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
  },
  blockedLoginMessage:{
    float: 'left',
    position: 'relative',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    lineHeight: 10,
    fontSize: 20
  },
  countDown:{
    float: 'left',
    width: 20,
    height: 15,
    marginTop: -6
  }
});
