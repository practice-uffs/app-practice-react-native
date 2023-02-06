import React, {useContext} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { AuthContext } from '../../context/auth';
import ServicesTabs from '../../components/ServicesTabs';
import { theme } from '../../styles/theme';
import NoticesCarousel from '../../components/NoticesCarousel/index';

export default function Services({navigation}) {
  const {nome} = useContext(AuthContext);

  return (
    <ScrollView style={{display: 'flex', height:'100%'}}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.title, {color: theme.colors.darkBlue} ]}>Serviços</Text>
        <View style={{ width: 250, marginTop: 10 }}>
        <Text style={styles.subTtile}>Uma ponte entre você e a construção de uma universidade melhor.</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', height: 200, alignItems: 'center', marginTop: 30 }}>
        <Image source={require('../../assets/images/services-img.png')} style={{ marginRight: 25 }}></Image>
        <Text style={{ color: '#003753' }}>
        • Áudio{'\n'}• Texto{'\n'}• Imagem{'\n'}• Estúdio{'\n'}• Software{'\n'}• Live
        </Text>
      </View>
      <ServicesTabs/>
      <View>
        <Text style={[{ color: '#FA8334', marginBottom: 40 }, styles.title]}>
          Notícias
        </Text>
        <NoticesCarousel />
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity 
            onPress= { () => navigation.navigate('NewsFeed') }
            style={styles.buttonContainer}>
               <Text style={{ color: '#fff', fontWeight: '600', fontSize: 15 }}> 
                  Ver mais
                </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FA8334',
    borderRadius: 6,
    paddingHorizontal: 45,
    paddingVertical: 15,
    width: 'auto',
    alignSelf: 'center'
  },
  title: {
    fontSize: 24, fontWeight: 'bold', textAlign: 'center'
  },
  subTtile: {
    fontSize: 14, color: theme.colors.darkBlue, textAlign: 'center'
  },
  whiteBackground: {
    width: 400,
    position: 'absolute',
    top: -300,
    zIndex: 0,
    elevation: 0
  }
})
