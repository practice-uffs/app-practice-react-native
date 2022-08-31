import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image resizeMode="contain" style={styles.profileImage} source={ require('../../assets/practice/logo-dark.png')} />

                <Text style={styles.title} >Guilherme Rafael Graeff</Text>
                <Text style={styles.subTitle} >guilherme.graeff</Text>
            </View>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.itemList}>
                    <DrawerItemList {...props}  />
                    <View style={styles.exitItem}>
                        <DrawerItem  label="Sair" onPress={() => alert('Saiu do app')} />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Image 
                    animation="bounce"
                    source={require('../../assets/icons/uffs.png')} 
                    style={styles.logoUffs}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: '#f1f1f1',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    itemList:{
        heigth: '50%'
    },
    exitItem:{
        borderTopColor: '#a1a1a1',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    profileImage:{
        heigth: '55%',
        width: '55%',
        flex: 5
    },
    subTitle: {
        color: '#000',
        textAlign: 'center',
        flex: 1,
        marginTop: -20
    },
    title: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1
    },
    footer: {
        height: '20%',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logoUffs: {
        marginBottom: 20,
        height: '40%',
        width: '100%',
    },
})