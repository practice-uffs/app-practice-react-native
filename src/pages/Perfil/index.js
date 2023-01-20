import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, ScrollView, View, StatusBar} from 'react-native';
import InfoPerfil from '../../components/InfoPerfil/infoperfil';

export default function Perfil({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
                <InfoPerfil />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    perfil: {
    }
  })