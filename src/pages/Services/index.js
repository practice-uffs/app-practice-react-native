import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Linking } from 'react-native';
import Lottie from 'lottie-react-native';
import { Text, Block, Button } from 'galio-framework'
const Drawer = createDrawerNavigator()
import { AuthContext } from '../../context/auth';
import ServicesTabs from './servicesTabs';
import { Divider } from "@react-native-material/core";


export default function Services({navigation}) {
  const {nome} = useContext(AuthContext);

  return (
    <Block style={{display: 'flex', height:'100%'}}>
      <Block marginLeft={20}  marginRight={20} marginBottom={10}>
        <Lottie
          source = {
            require("../../assets/lottie/services.json")
          }
          loop
          autoPlay
          style = {
            {
              width: '60%',
              alignSelf: 'center'
            }
          }
        />
        <Text h6 bold>
          Serviços
        </Text>
        <Block marginTop={10} marginBottom={10}>
          <Text p size={16}>
            O PRACTICE conta com vários serviços para ajudar você em suas atividades e projetos.
          </Text>
        </Block>
        <Block center>
          <Button size={'large'} uppercase round flex={1} icon='rightcircleo' iconFamily='AntDesign' onPress={() => Linking.openURL("https://practice.uffs.edu.br/mural/servicos")}>
            Solicitar Serviço
          </Button>
        </Block>
      </Block>
      <ServicesTabs/>
    </Block>
  );
}

