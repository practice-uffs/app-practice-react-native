import React from 'react';
import {SafeAreaView, ImageBackground, StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InfoPerfil from '../../components/InfoPerfil/infoperfil';

const image = '../../assets/Vectors/monstanhas.png';

export default function Perfil({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.perfil}>
                    <InfoPerfil />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    perfil: {
    }
  })