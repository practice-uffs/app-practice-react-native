import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function About() {
  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.whiteCardSolo }>
        <Image 
          animation="flipInY"
          source={require('../../assets/practice/logo-dark.png')} 
          style={styles.logoPractice}
          resizeMode="contain"/>
        <View width='72%'>  
          <Text>PRACTICE</Text>
          <Text style={ styles.text }>Programa de Ampliação e Consolidação de Tecnologias e Inovação no Contexto Educacional</Text>
        </View>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="information-circle-outline" size={32} color="grey" />
          <Text style={ styles.title }>Sobre o programa</Text>
        </View>
        
        <View style={ styles.whiteCard }>
          <Text style={ styles.text }> O PRACTICE é um programa de ensino, pesquisa, extensão e inovação da Universidade Federal da Fronteira Sul (UFFS). Ele é composto por bolsistas e professores que atuam com o objetivo de empoderar tecnologicamente a comunidade acadêmica.</Text>
          <Text style={ styles.text }> O programa visa estruturar ambientes, capacitar agentes educacionais, produzir e mediar a produção de conteúdos educacionais. A filosofia é promover e democratizar tecnologia e inovação, do cotidiano até o processo de aprendizagem, de estudantes e servidores da UFFS.</Text>
        </View>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="people-outline" size={32} color="grey" />
          <Text style={ styles.title }>Integrantes</Text>
        </View>

        <View style={ styles.whiteCard }>
          <Text style={ styles.text }>A lista completa de integrantes do programa está disponível em nosso site. Clique no botão abaixo para acessar.</Text>
          <TouchableOpacity style={ styles.button } >
            <Text style={ styles.buttonText }>CONHECER EQUIPE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="game-controller-outline" size={32} color="grey" />
          <Text style={ styles.title }>Experimentos</Text>
        </View>
        <View style={ styles.whiteCard }>
          <Text style={ styles.text }>O PRACTICE deseja implementar muitas funcionalidades interativas e dinâmicas, mas, para tal, é necessário realizar testes e experimentos para garantir que as funcionalidades criadas sejam de qualidade.</Text>
          <Text style={ styles.text }>Veja abaixo alguns experimentos:</Text>
          <TouchableOpacity style={ styles.button } >
            <Text style={ styles.buttonText }>GRAVAÇÃO DE ÁUDIO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="brush-outline" size={32} color="grey" />
          <Text style={ styles.title }>Créditos da arte</Text>
        </View>
        <Text style={ styles.textSolo }>Aqui</Text>
        <Text style={ styles.textSolo }>Vão os</Text>
        <Text style={ styles.textSolo }>Créditos</Text>
      </View>

      <View style={ styles.contentConteiner }>
      <View style={ styles.titleContainer }>
          <Ionicons name="code-slash-outline" size={32} color="grey" />
          <Text style={ styles.title }>Licenças de software</Text>
      </View>
        <Text style={ styles.textSolo }>Aqui</Text>
        <Text style={ styles.textSolo }>Vão as</Text>
        <Text style={ styles.textSolo }>Licenças</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f1f1f1',
  },
  whiteCard:{
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 20
  },
  whiteCardSolo:{
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 20
  },
  titleContainer:{
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  title:{
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },
  contentConteiner:{
    marginVertical: 10
  },
  text:{
    lineHeight: 20,
    marginVertical: 20,
    textAlign: 'justify'
  },
  textSolo:{
    marginVertical: 10,
    marginLeft: 20,
    textAlign: 'justify',
    color: 'grey'
  },
  button: { 
    backgroundColor: '#4388a5',
    borderRadius: 5,
    paddingVertical: 15,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff"
  },
  logoPractice: {
    width: '20%',
    height: '100%',
    marginRight: 20
  },
})