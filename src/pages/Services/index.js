import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import Lottie from 'lottie-react-native';

const Drawer = createDrawerNavigator()
import { AuthContext } from '../../context/auth';

export default function Services() {
  const {nome} = useContext(AuthContext);

  return (
    <View>
      <Lottie source={require('./animation.json')} autoPlay loop />
    </View>
  );
}

