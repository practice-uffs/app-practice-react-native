import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Configuration from '../pages/Configuration'
import About from '../pages/About'
import Home from '../pages/Home'
import NewsFeed from '../pages/NewsFeed'
import News from '../pages/News'
import CustomDrawer from '../components/CustomDrawer'
import RuMenu from '../pages/RuMenu'
import Order from '../pages/Order'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerRoutes = () => {
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
                component= { Home }  
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

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerTab"
                component={ DrawerRoutes }
                options= {{ headerShown: false}}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="NewsFeed"
                component={ NewsFeed }
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="News"
                component={ News }
            />
            <Stack.Screen 
                name='Cardápio RU'
                component= { RuMenu }  
            />
            <Stack.Screen
                options={{ title: 'Pedido' }}
                name='Order'
                component= { Order }  
            />  
        </Stack.Navigator>
    )
}

export { AppRoutes, AuthRoutes};