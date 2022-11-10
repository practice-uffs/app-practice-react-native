import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon, { Icons } from '../../assets/icons/Icons';
import { theme } from '../../styles/theme';
import AcademicCalendar from '../AcademicCalendar/AcademicCalendar';

const InfoPerfil = ({
    // parametros
}) => {
    return (
        // Oq retorna
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.person}>
                    <View>
                        <View style={{ backgroundColor: '#FFD7BD', borderRadius: 100, width: 130, height: 130, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.Feather} name={'user'} color={theme.colors.darkOrange} size={75}/>
                        </View>
                        <View style={{ position: 'absolute', top: 90, left: 100 }}>
                            <TouchableOpacity activeOpacity={1.0} style={{ backgroundColor: '#FFE9BD', borderRadius: 30/2, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon type={Icons.Feather} name={'more-vertical'} color={theme.colors.darkOrange} size={15}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ color: theme.colors.darkOrange, fontSize: 22, fontWeight: 'bold', marginTop: 5, }}>Fulano de Tal</Text>
                    <Text style={{ color: theme.colors.darkBlue, fontSize: 16, fontWeight: '300' }}>2211100065</Text>
                </View>
                <View style={styles.containerTwo}>
                    <View>
                        <Icon type={Icons.Feather} name={'map-pin'} color={theme.colors.darkBlue} />
                    </View>
                    <View style={styles.goingOn}>
                        <Text style={{ color: theme.colors.darkBlue, fontSize: 14, fontWeight: 'bold' }}>O que está acontecendo?</Text>
                        <Text style={{ color: theme.colors.darkBlue, fontSize: 14, fontWeight: '300', marginTop: 5}}>Matemática C - 309B</Text>
                    </View>
                </View>
                <View style={{ paddingRight: 40, paddingLeft: 40 }}>
                    <AcademicCalendar />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    goingOn: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: -30
    },
    person: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -65,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingBottom: 60
    },
});

export default InfoPerfil;