import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function About() {
  const [isEnabledDownload, setIsEnabledDownload] = useState(false);
  const [isEnabledNotifications, setIsEnabledNotifications] = useState(false);
  const [isEnabledDeveloperMode, setIsEnabledDeveloperMode] = useState(false);

  const toggleSwitchDownload = () => setIsEnabledDownload(previousState => !previousState);
  const toggleSwitchNotifications = () => setIsEnabledNotifications(previousState => !previousState);
  const toggleSwitchDeveloperMode = () => setIsEnabledDeveloperMode(previousState => !previousState);

  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="information-circle-outline" size={32} color="grey" />
          <Text style={ styles.title }>Sobre o programa</Text>
        </View>
        
        <View style={ styles.whiteCard }>
          <View style={ styles.titleContainer }>
            <Ionicons name="cloud-download-outline" size={32} color="grey" />
            <Text style={ styles.title }>Baixar dados para acesso offline</Text>
            <Switch style={ styles.switch }
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledDownload ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchDownload}
              value={isEnabledDownload}
            />
          </View>
        </View>
        <TouchableOpacity 
          style={ styles.whiteCard }
          onPress={() => alert('Limpando armazenamento')}>
          <View style={ styles.titleContainer }>
            <Ionicons name="trash-outline" size={32} color="grey" />
            <Text style={ styles.title }>Limpar armazenamento</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="notifications-outline" size={32} color="grey" />
          <Text style={ styles.title }>Notificações</Text>
        </View>
        
        <View style={ styles.whiteCard }>
          <View style={ styles.titleContainer }>
            <Ionicons name="notifications-outline" size={32} color="grey" />
            <Text style={ styles.title }>Receber notificações no dispositivo</Text>
            <Switch style={ styles.switch }
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledNotifications ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchNotifications}
              value={isEnabledNotifications}
            />
          </View>
        </View>
      </View>

      <View style={ styles.contentConteiner }>
        <View style={ styles.titleContainer }>
          <Ionicons name="code-slash-outline" size={32} color="grey" />
          <Text style={ styles.title }>Desenvolvimento</Text>
        </View>
        
        <View style={ styles.whiteCard }>
          <View style={ styles.titleContainer }>
            <Ionicons name="terminal-outline" size={32} color="grey" />
            <Text style={ styles.title }>Modo desenvolvedor</Text>
            <Switch style={ styles.switch }
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledDeveloperMode ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchDeveloperMode}
              value={isEnabledDeveloperMode}
            />
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f1f1f1',
  },
  contentConteiner:{
    marginVertical: 10
  },
  switch:{
    alignSelf: 'flex-end',
    flex: 1,
    marginRight: 3
  },
  title:{
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    flex: 7
  },
  titleContainer:{
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10
  },
  text:{
    lineHeight: 20,
    marginVertical: 20,
    textAlign: 'justify',
  },
  whiteCard:{
    width: '100%',
    backgroundColor: 'white',
  }
})