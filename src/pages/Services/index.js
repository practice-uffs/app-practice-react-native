import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Linking } from 'react-native';
import Lottie from 'lottie-react-native';
import { Text, Block, Button } from 'galio-framework'
const Drawer = createDrawerNavigator()
import { AuthContext } from '../../context/auth';
import ServicesTabs from './servicesTabs';

export default function Services() {
  const { nome } = useContext(AuthContext);
  
  return (
    <View>
      <Block margin={20}>
        <Lottie
          source = {
            require("../../assets/lottie/services.json")
          }
          loop
          autoPlay
          style = {
            {
              width: '75%',
              alignSelf: 'center'
            }
          }
        />
        <Text h5>
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
      <Block>
        <ServicesTabs/>
      </Block>
    </View>
  );
}

