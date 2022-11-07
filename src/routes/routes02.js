import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'

import Welcome from '../pages/Welcome'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#9fe801',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabels: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#171626',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60,
                }
             }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                 }}
            />

            <Tab.Screen
                name="About"
                component={About}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name="search" size={size} color={color} />
                        }
                        return <Ionicons name="search-outline" size={size} color={color} />
                    }
                 }}
            />

            <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name="bookmark" size={size} color={color} />
                        }
                        return <Ionicons name="boomark-outline" size={size} color={color} />
                    }
                 }}
            />

            <Tab.Screen
                name="News"
                component={News}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name="person" size={size} color={color} />
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />
                    }
                 }}
            />
        </Tab.Navigator>
    )
}

export default Routes;