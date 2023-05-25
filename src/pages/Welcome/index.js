import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';
import { wave1, wave2, wave3, wave4 } from './svg';

export default function Welcome({navigation}) {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.alignImage}>
          <Animatable.Image  
            animation="bounce"
            source={require('../../assets/practice/logo-practice-915x286.png')} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Criamos <B>soluções tecnológicas</B> para <B>aprimorar</B> o ambiente acadêmico.</Text>
      </View>
    
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerButton}>
        <TouchableOpacity 
          onPress= { () => navigation.navigate('SignIn') }
          style={styles.button}>
          <Text style={styles.buttonText}> 
            Login
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View delay={1200} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave3} width="100%" height="100%" />
      </Animatable.View>
    
      <Animatable.View delay={400} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave2} width="100%" height="100%" />
      </Animatable.View>
    
      <Animatable.View delay={100} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave4} width="100%" height="100%" />
      </Animatable.View>
      
      <Animatable.View delay={800} animation="fadeInUp"  style={styles.svgWave}>
            <SvgXml xml={wave1} width="100%" height="100%" />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grayBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage:{
    width: '100%',
    height: 120,
    marginTop: -100,
  },
  alignImage: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    position: 'absolute',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  button: { 
    backgroundColor: '#2F7B9A',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff",
    fontWeight: '600',
    fontSize: 18
  },
  title: {
    color: '#003753',
    textAlign: 'center',
    margin: 10,
    fontSize: 24, 
    paddingHorizontal: 50,
    paddingVertical: 75,
    fontWeight: '500'
  },
  svgWave: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    bottom: -15,
  },
  containerButton: {
    bottom: 50
  }
});