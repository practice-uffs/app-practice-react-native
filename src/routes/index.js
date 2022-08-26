import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Storage from '../services/storage'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import TabNavigator from '../pages/TabNavigator'

const Stack = createNativeStackNavigator();

export default function Routes() {
    const isSignedIn = Storage.isSignedIn();

    var routes = isSignedIn ? (
        <>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options= {{ headerShown: false}}
            >
            </Stack.Screen>
        </>
    ) : (
        <>
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
        </>
    )

    return (
        <Stack.Navigator>
            {routes}
        </Stack.Navigator>
    )
}