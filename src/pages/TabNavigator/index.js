import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

import Services from '../Services';
import QrCode from '../QrCode';
import NewsFeed from '../NewsFeed';
import FuncionalitySamples from '../FuncionalitySamples';
import Aura from '../Aura';

import { Entypo } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
            initialRouteName='Serviços'
            screenOptions={{
                    "tabBarStyle": [
                    {
                        "backgroundColor": "white",
                        "borderTopColor": "transparent",
                        "paddingBottom": 6,
                        "paddingTop": 5,
                        "height": "10%"
                    },
                    ],
                    "tabBarActiveTintColor" : "#5097ad",
                    "tabBarInactiveTintColor" : "#264753",
                }}
        >
            <Tab.Screen 
                name="Serviços" 
                component={Services}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="briefcase" size={size} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="QrCode" 
                component={QrCode}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="qr-code-outline" size={size} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Notícias" 
                component={NewsFeed}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="news" size={size} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Exemplos" 
                component={FuncionalitySamples}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="dots-three-horizontal" size={size} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Aura" 
                component={Aura}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                    ),
                    headerShown: false
                }} 
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
})