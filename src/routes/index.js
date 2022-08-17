import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import TabNavigator from '../pages/TabNavigator'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options= {{ headerShown: false}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options= {{ headerShown: false}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options= {{ headerShown: false}}
            >
            </Stack.Screen>

            </Stack.Navigator>
    )
}