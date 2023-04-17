import React from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView, View, StatusBar} from 'react-native';
import InfoPerfil from '../../components/InfoPerfil/infoperfil';
import ScheaduleCarousel from '../../components/ScheaduleCarousel/index';
import { theme } from '../../styles/theme';

export default function Perfil({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
                <InfoPerfil />
                <ScheaduleCarousel />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  })