import React, { useState, useContext, useEffect }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Keyboard, Image} from 'react-native';
import { Button, Snackbar } from "@react-native-material/core";
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../context/auth';
import Input from '../../components/Inputs/Input';
import Loader from '../../components/Loaders/loader';
import CampusPicker from '../../components/CampusPicker/index';
import Icon, { Icons } from '../../assets/icons/Icons';
import { SvgXml } from 'react-native-svg';
import { montanha1, montanha2, montanha3, logo, sol } from './svg';

import {
	LOGIN_ATTEMPTS,
  TIMEOUT_LOGIN
} from '@env';

export default function SignIn({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const [campus, setCampus] = React.useState("");
  const { signIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = React.useState({});
  const [inputs, setInputs] = React.useState({
    iduffs: '',
    password: ''
  });

  const [attempts, setAttempts] = useState(LOGIN_ATTEMPTS);
  const [timeoutLogin, setTimeoutLogin] = useState(TIMEOUT_LOGIN);
  const [disabledLogin, setDisabledLogin] = useState(false);

  async function login() {
    setLoading(true);
    let signned = await signIn(inputs.iduffs, inputs.password, campus);
    if (!signned) {
      if (attempts <= 1) {
        setAttempts(attempts-1);
        setTimeoutLogin(TIMEOUT_LOGIN);
        setDisabledLogin(true);
      } else {
        setAttempts(attempts-1);
      }
      setErrorMessage("Erro ao efetuar o Login");
    }
    setLoading(false);   
  }

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.iduffs) {
      handleError('Por favor, insira seu idUFFS', 'iduffs');
      isValid = false;
    } else if (inputs.iduffs.length < 5) {
      handleError('Tamanho mínimo de idUFFS é de 5 caracteres', 'iduffs');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Por favor, insira sua senha', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Tamanho mínimo de senha é de 5 caracteres', 'password');
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

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
    <SafeAreaView style={{backgroundColor: theme.colors.whiteBackground, flex: 1}}>
      <Loader visible={loading} />
      <View style={styles.backContainer}>
        <TouchableOpacity
          style={ styles.button } 
          onPress= { () => navigation.navigate('Welcome') }
        >
          <Icon type={Icons.Ionicons} name={'arrow-back-circle-outline'} color={theme.colors.darkBlue} size={30}/>
        </TouchableOpacity>
      </View>

      <Animatable.View style={styles.containerHeader} animation="fadeInLeft" delay={400}>
        <Text style={ styles.message }>Entre com o seu idUFFS e senha</Text>
      </Animatable.View>
      
      <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={400}>
        <Input
          onChangeText={text => handleOnChange(text, 'iduffs')}
          onFocus={() => handleError(null, 'iduffs')}
          iconName="account-outline"
          label="idUFFS"
          placeholder="Digite seu idUFFS"
          error={errors.iduffs}
        />
        <Input
          onChangeText={text => handleOnChange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password}
          password
          />
          <View style={styles.campusContainer}>
            <CampusPicker
            setSelected={setCampus}
            dropdownWidth={300}
            dropdownRight={-20}
            dropdownTop={-10}
            width={415}
            />
          </View>
        {disabledLogin && 
        <View style={[styles.blockedLoginMessage]}>
          <Text style={{float:'left', width: 'auto', paddingRight: 10}}>Bloqueado por: {timeoutLogin} segundos</Text>
        </View>  
        }
        {!disabledLogin && 
        <View style={styles.blockedLoginMessage}><Text>Tentativas restantes: { attempts }</Text></View>
        }
       
       <Button title="Entrar"
        disabled={(inputs.iduffs == '' || inputs.password=='' || !campus || disabledLogin || loading )}
        loading={loading}
        uppercase={false}
        loadingIndicatorPosition="overlay"
        onPress={validate}
        style={styles.entrar}/>

      </Animatable.View>

      <Animatable.View delay={1000} animation="fadeInUp"  style={styles.svgMountain1}>
            <SvgXml xml={montanha1} style={{scale: 0.4}}/>
      </Animatable.View>
      <Animatable.View delay={800} animation="fadeInUp"  style={styles.svgMountain2}>
            <SvgXml xml={montanha2} style={{scale: 0.4}}/>
      </Animatable.View>
      <Animatable.View delay={600} animation="fadeInUp"  style={styles.svgMountain3}>
            <SvgXml xml={montanha3} style={{scale: 0.4}}/>
      </Animatable.View>
      <Animatable.View delay={1300} animation="fadeInUp"  style={styles.sol}>
        <SvgXml xml={sol} style={{scale: 0.1}}/>
      </Animatable.View>
      <Animatable.View delay={800} animation="fadeInRight"  style={styles.logo}>
        <SvgXml xml={logo} style={{scale: 0.5, opacity: 0.5}}/>
      </Animatable.View>
      {errorMessage ?
        <Snackbar
          message={errorMessage}
          action={<Button variant="text" title="Fechar" color={"#fff"} compact onPress={() => setErrorMessage(null)}/>}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor:"#2F7B9A"}}
        /> : null
      }
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  backContainer:{
    width: '100%'
  },
  button:{
    width: '20%',
    marginLeft: 20,
    marginTop: 10,
    zIndex: 1
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
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  containerForm: {
    flex: 3,
    width: '100%',
    paddingStart:'5%',
    paddingEnd:'5%',
    zIndex: 5,
    flexDirection: "column"
  },

  iduffs: {
    fontSize: 20,
  },
  input: {
    marginBottom: 20, 
    paddingLeft: 0

  },
  message: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003753',
    textAlign: 'center',
  },
  senha:{
    fontSize: 20,
  },
  blockedLoginMessage:{
    float: 'left',
    position: 'relative',
    flexDirection: 'row',
    marginTop: 38,
    marginBottom: 15,
    lineHeight: 10,
    fontSize: 20,
    zIndex: 1,
  },
  countDown:{
    float: 'left',
    width: 20,
    height: 15,
    marginTop: -6
  },
  entrar : {
    backgroundColor: "#2F7B9A",
    width: 120,
    height: 40,
    justifyContent: 'center',
    left: 120,
    top: 15
  },
  svgMountain1: {
    width: '100%',
    zIndex: 4,
    position: 'absolute',
    top: 700
  },
  svgMountain2: {
    width: '100%',
    zIndex: 3,
    position: 'absolute',
    top: 680
  },
  svgMountain3: {
    width: '100%',
    zIndex: 2,
    position: 'absolute',
    top: 680
  },
  sol: {
    zIndex: 1,
    position: 'absolute',
    top: 710,
    left: 120
  },
  campusContainer: {
    position: 'absolute',
    top: 195,
    zIndex: 6
  },
  logo: {
    width: '100%',
    position: 'absolute',
    left: 110,
  }
});
