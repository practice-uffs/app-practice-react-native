import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';
import successIcon from '../../assets/success.png'

interface Props extends TouchableOpacityProps {
  icon?: '' | 'success';
  name: string;
  isLoading: boolean;
}

export function Button({ icon, name, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      {
        isLoading ? 
          <ActivityIndicator 
            color={theme.colors.text_brancoClaro}
          /> 
        : 
          <View style={styles.rowItems}>
            {
              icon != '' ? ( 
                <Image
                    source={
                      icon == 'success' ? successIcon :
                      icon == 'success' ? successIcon : 
                      successIcon
                    }
                    style={styles.icon}
                />) : (undefined)
            }
            <Text style={styles.label}>{name}</Text>
          </View>
      }
    </TouchableOpacity>
  );
}