import React, { useState, useContext }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Keyboard} from 'react-native';
import { Button, Snackbar } from "@react-native-material/core";
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../context/auth';
import {Picker} from '@react-native-picker/picker';
import Input from '../../components/Inputs/Input';
import Loader from '../../components/Loaders/loader';

export default function SignIn({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const { signIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [campus, setCampus] = useState('cerro-largo');
  const [errors, setErrors] = React.useState({});
  const [inputs, setInputs] = React.useState({
    iduffs: '',
    password: ''
  });

  async function login() {
    setLoading(true);
    let signned = await signIn(inputs.iduffs, inputs.password, campus);
    if (!signned) {
      setErrorMessage("Erro ao efetuar o Login");
    }
    setLoading(false);
  }

  const validate = () => {
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

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.whiteBackground, flex: 1}}>
      <Loader visible={loading} />
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

      <Animatable.View style={styles.containerHeader} animation="fadeInLeft" delay={400}>
        <Text style={ styles.message }>Entre com o seu idUFFS e senha</Text>
      </Animatable.View>
      
      <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={400}>
        <Input
          onChangeText={text => handleOnchange(text, 'iduffs')}
          onFocus={() => handleError(null, 'iduffs')}
          iconName="account-outline"
          label="idUFFS"
          placeholder="Digite seu idUFFS"
          error={errors.iduffs}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password}
          password
          />
        <Picker
          style={{ marginBottom: 10 }}
          mode={"dropdown"}
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
        <Button title="Entrar" onPress={validate} />
      </Animatable.View>
      
      {errorMessage ?
        <Snackbar
          message={errorMessage}
          action={<Button variant="text" title="Fechar" compact onPress={() => setErrorMessage(null)}/>}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
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
    width: '100%',
    flex: 1,
    justifyContent: 'center'
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
  message: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003753',
    textAlign: 'center',
  },
  senha:{
    fontSize: 20,
  }
});
