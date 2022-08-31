import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from '../TabNavigator'
import Configuration from '../Configuration'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='ConfigurationDrawer'
        component= { Configuration }  
      />
      <Drawer.Screen 
        name='TabNavigatorDrawer'
        component= { TabNavigator }  
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}
