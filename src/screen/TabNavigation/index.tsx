import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Asterisk, House, Briefcase ,QrCode as QrCodeIcon, NewspaperClipping } from 'phosphor-react-native';

import { theme } from '../../theme';
import { toolTypes } from '../../utils/toolsTypes';
import IconAura from '../../assets/icons/aura.svg';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={toolTypes.mural.title}
          screenOptions={({ route }: any) => ({
            tabBarIcon: ({ focused }: any) => {
              const iconSize = focused ? 50 : 32;
              const iconWeight = focused ? 'fill' : 'bold';

              switch (route.name) {
                case toolTypes.home.title:
                  return <House color={theme.colors.azul_escuro} size={iconSize} weight={iconWeight} />;
                case toolTypes.mural.title:
                  return <Briefcase color={theme.colors.azul_escuro} size={iconSize} weight={iconWeight} />;
                case toolTypes.qrcode.title:
                  return <QrCodeIcon color={theme.colors.azul_escuro} size={iconSize} weight={iconWeight} />;
                case toolTypes.newsfeed.title:
                  return <NewspaperClipping color={theme.colors.azul_escuro} size={iconSize} weight={iconWeight} />;
                case toolTypes.aura.title:
                  return <IconAura width={focused ? iconSize-9 : iconSize}  height={focused ? iconSize-9 : iconSize} />
                default:
                  return <Asterisk color={theme.colors.azul_escuro} size={iconSize} weight={iconWeight} />;
              }
            },

            tabBarActiveTintColor: theme.colors.azul_claro,
            tabBarStyle: {
              height: 55,
            }
          })}
        >
          {
            Object.entries(toolTypes).map((([key, value]) => 
              <Tab.Screen key={key} name={value.title} component={value.screen} />)
            )
          }
        </Tab.Navigator>
      </NavigationContainer>
  );
}