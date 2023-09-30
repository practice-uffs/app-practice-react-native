import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';


function Order({route}){

  
  
    return (

      <View style={styles.container}>

        <Text style={styles.status}>Número do pedido (id): {route.params.id}</Text>
        <Text style={styles.status}>Status atual: {route.params.status}</Text>
        <Text style={styles.title}>Título: {route.params.title}</Text>
        <Text style={styles.description}>Descrição: {route.params.description}</Text>
        <Text style={styles.created_at}>Data de criação: {route.params.created_at}</Text>

      </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCAE17', 
    marginBottom: 10,
    borderRadius: 8, 
    padding: 10, 
    backgroundColor: '#FDEDD0', 
  },
  description: {
    fontSize: 16,
    color: '#2F7B9A', 
    marginBottom: 10,
    borderRadius: 8, 
    padding: 10, 
    backgroundColor: '#D5E8ED', 
  },
  status: {
    fontSize: 18,
    color: '#FCAE17', 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 10,
    backgroundColor: '#FDEDD0', 
  },
  created_at: {
    fontSize: 16,
    color: '#2F7B9A', 
    marginBottom: 10,
    borderRadius: 8, 
    padding: 10, // espaçamento interno
    backgroundColor: '#FDEDD0', 
  }
});


export default Order;