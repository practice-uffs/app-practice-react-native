import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, ScrollView, View, StatusBar} from 'react-native';
import InfoPerfil from '../../components/InfoPerfil/infoperfil';

export default function Perfil({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
            <ImageBackground source={require('../../assets/background/infoperfil_bg.png')} style={{ height: 'auto' }}>
                <View style={{ position: 'relative', top: 120 }}>
                    <InfoPerfil />
                </View>
            </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    perfil: {
    }
  })