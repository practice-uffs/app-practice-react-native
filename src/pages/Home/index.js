import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import Services from '../Services';
import QrCode from '../QrCode';
import NewsFeed from '../NewsFeed';
import Aura from '../Aura';

const TabArr = [
    { route: 'Service', label: 'Serviços', icon: 'home', component: Services},
    { route: 'QrCode', label: 'Scan', icon: 'qr-code', component: QrCode},
    { route: 'Aura', label: 'Aura', icon: 'bookmark', component: Aura},
    { route: 'NewsFeed', label: 'Perfil', icon: 'person', component: NewsFeed},
];
  
const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);
  
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, {flex: focused ? 1 : 0.65}]}>
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, { backgroundColor: '#000', borderRadius: 16 }]} />
                <View style={[styles.btn, { backgroundColor: focused ? '#003753' : '#EBEBEB' }]}>
                    <Ionicons name={item.icon} color={focused ? '#FFFFFF' : '#003753'} />
                    <Animatable.View
                        ref={textViewRef}>
                        {focused && <Text style={{
                        color: '#FFFFFF', paddingHorizontal: 8
                        }}>{item.label}</Text>}
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 19,
            right: 16,
            left: 16,
            borderRadius: 50,
          }
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    )
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 16,
    }
  })