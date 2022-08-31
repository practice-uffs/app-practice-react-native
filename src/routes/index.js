import React, { useState, useContext }  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import { AuthContext } from '../context/auth';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
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

export default function Routes() {
    const { isLogged } = useContext(AuthContext);
    const { checkStorage } = useContext(AuthContext);

    checkStorage();

    return isLogged ? AuthRoutes() : AppRoutes();
}