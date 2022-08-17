import React from 'react';

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

