import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Configuration from '../pages/Configuration'
import About from '../pages/About'
import TabNavigator from '../pages/TabNavigator'
// import Header from '../../components/Header'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

import CustomDrawer from '../components/CustomDrawer'

function DrawerRoutes(){
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent = {(props) => <CustomDrawer {...props} />}
            screenOptions={{
                    headerTitle: 'PRACTICE',  
                }}
            >
            <Drawer.Screen 
                name='Home'
                component= { TabNavigator }  
            />
            <Drawer.Screen 
                name='Sobre'
                component= { About }  
            /> 
            <Drawer.Screen 
                name='Configurações'
                component= { Configuration }  
            /> 
        </Drawer.Navigator>
    )
}

export default function AppRoutes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeTab'>
                <Stack.Screen
                    name="WelcomeTab"
                    component={Welcome}
                    options= {{ headerShown: false}}
                />
                <Stack.Screen
                    name="SignInTab"
                    component={SignIn}
                    options= {{ headerShown: false}}
                />
                <Stack.Screen
                    name="DrawerTab"
                    component={DrawerRoutes}
                    options= {{ headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    icon: {
        height: '10%'
    }
})