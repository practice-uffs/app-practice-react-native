import { View, StyleSheet, Text, Image, Alert } from 'react-native'
import React, { Component, useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../context/auth';
import { Avatar, Flex } from "@react-native-material/core";


export default function CustomDrawer(props){
    const { signOut } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View View style = {styles.avatar} >
                    < Avatar label={user.name} autoColor size={100} image = {
                    {
                        uri: `https://cc.uffs.edu.br/avatar/iduffs/${user.username}`
                    }
                }
                />
                </View>
                <Text style={styles.title} >{user.name}</Text>
                <Text style={styles.subTitle} >{user.username}</Text>
            </View>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.itemList}>
                    <DrawerItemList {...props}  />
                    <View style={styles.exitItem}>
                        <DrawerItem label="Sair" onPress={() => {
                            Alert.alert('Sair', "Você deseja mesmo sair?", [
                                {
                                    text: "sim",
                                    onPress: () => {
                                        signOut();
                                    }
                                },
                                {
                                    text: "cancelar",
                                }
                            ], {
                                cancelable: true, 
                            });
                            
                        }
                        } />
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
    exitItem:{
        borderTopColor: '#a1a1a1',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    footer: {
        height: '20%',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    header:{
        backgroundColor: '#f1f1f1',
        height: '40%',
        justifyContent: 'space-around',
        display: 'flex',
        alignItems: 'center'

    },
    itemList:{
        heigth: '50%'
    },
    logoUffs: {
        marginBottom: 20,
        height: '40%',
        width: '100%',
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
    avatar: {
        flex: 5,
        display: 'flex',
        justifyContent: 'center',
    }
})