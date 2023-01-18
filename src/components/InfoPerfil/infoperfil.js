import React, { useContext, useReducer, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon, { Icons } from '../../assets/icons/Icons';
import { theme } from '../../styles/theme';
import AcademicCalendar from '../AcademicCalendar/AcademicCalendar';
import CampusPicker from '../CampusPicker/index';

const InfoPerfil = ({
    // parametros
}) => {
    const [campus, setCampus] = React.useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.person}>
                    <View>
                        <View style={styles.userIconContainer} >
                            <Icon type={Icons.Feather} name={'user'} color={theme.colors.darkOrange} size={75}/>
                        </View>
                        <View style={{ position: 'absolute', top: 90, left: 100 }}>
                            <TouchableOpacity activeOpacity={1.0} style={styles.options}>
                                <Icon type={Icons.Feather} name={'more-vertical'} color={theme.colors.darkOrange} size={15}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={ styles.userName }>Fulano de Tal</Text>
                    <Text style={ styles.userIDUFFS }>2211100065</Text>
                </View>
                <View style={styles.containerThree}>
                    <View style={styles.campusContainer}>
                        <Icon type={Icons.Feather} name={'map-pin'} color={theme.colors.darkBlue} style={{ top: 10, right: 10 }} />
                        <CampusPicker
                            setSelected={setCampus}
                            dropdownWidth={175}
                            fontWeight={'600'}
                            width={175}
                        />
                    </View>
                    <View style={styles.goingOn}>
                        <Text style={{ color: theme.colors.darkBlue, fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>O que está acontecendo?</Text>
                        <Text style={{ color: theme.colors.darkBlue, fontSize: 14, fontWeight: '300', marginTop: 5}}>Matemática C - 309B</Text>
                    </View>
                    <View style={{ paddingRight: 40, paddingLeft: 40, }}>
                        <AcademicCalendar />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    goingOn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 150,
        backgroundColor: '#F9F9F9',
        paddingBottom: 25,
        top: -35
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerThree: {
        flexDirection: 'column'
    },
    person: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -65
    },
    card: {
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingBottom: 60
    },
    options: {
        backgroundColor: '#FFE9BD',
        borderRadius: 30/2,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userIconContainer: {
        backgroundColor: '#FFD7BD',
        borderRadius: 100,
        width: 130,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userName: {
        color: theme.colors.darkOrange, fontSize: 22, fontWeight: 'bold', marginTop: 5,
    },
    userIDUFFS: {
        color: theme.colors.darkBlue, fontSize: 16, fontWeight: '300'
    },
    campusContainer: {
        position: 'absolute',
        zIndex: 5,
        flexDirection: 'row',
        left: 78,
        top: -10
    },
});

export default InfoPerfil;