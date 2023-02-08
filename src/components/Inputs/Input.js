import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../styles/theme';

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
  }) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{marginBottom: 20}}>
            <Text style={style.label}>{label}</Text>
            <View
            style={[
              style.inputContainer,
              {
                borderColor: error
                  ? theme.colors.redAlert
                  : isFocused
                  ? theme.colors.darkBlue
                  : theme.colors.greyText,
                alignItems: 'center',
              },
            ]}>
                <Icon
                    name={iconName}
                    style={{color: theme.colors.darkBlue, fontSize: 22, marginRight: 10}}
                />
                <TextInput
                placeholderTextColor="#003753"
                autoCorrect={false}
                onFocus={() => {
                    onFocus();
                    setIsFocused(true);
                }}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={hidePassword}
                style={{color: theme.colors.darkBlue, flex: 1}}
                {...props}
                />
                {password && (
            <Icon
                onPress={() => setHidePassword(!hidePassword)}
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                style={{color: theme.colors.darkBlue, fontSize: 22}}
            />
            )}
            </View>
            {error && (
                <Text style={{marginTop: 7, color: theme.colors.redAlert, fontSize: 12}}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    label: {
      marginVertical: 5,
      fontSize: 14,
      color: theme.colors.darkBlue,
    },
    inputContainer: {
      height: 55,
      backgroundColor: theme.colors.whiteBackground,
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderWidth: 0.5,
      borderRadius: 8
    },
  });
  
  export default Input;
