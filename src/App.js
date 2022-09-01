import React from 'react';

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

// export default function App() {
//   return (
    // <NavigationContainer>
    //   <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
    //   <Routes/>
    // </NavigationContainer>
//   );
// }

// import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
        <Routes/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}