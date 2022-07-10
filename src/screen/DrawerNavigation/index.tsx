import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { About } from '../About';
import { Configs } from '../Configs';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={About} />
        <Drawer.Screen name="Notifications" component={Configs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}