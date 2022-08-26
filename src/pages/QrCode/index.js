import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import { theme } from '../../styles/theme';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QrCodeListItem from '../../components/QrCodeListItem';

export default function QrCode() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [allCodes, setAllCodes] = useState([])


  const askCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted');
    })()
  }

  useEffect(() =>{
    askCameraPermission();
  }, []);


  const handleBarCodeScanned = ({type, data}) => {
    if (allCodes.find(codeList => codeList.id == data) == undefined && data !== ''){
      setAllCodes([...allCodes, {id: data, code: data}])
    } else { 
      Alert.alert(
        "Ops!",
        "Este qrCode já foi lido",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    setScanned(true);
  }

  if (hasPermission == null){
    return (
      <View style={styles.container}>
          <Text>Requisitando permissão da camera</Text>
      </View>
    );
  } 

  if (hasPermission == false){
    return (
      <View style={styles.container}>
          <Text style={styles.accessDenied}>Sem acesso a câmera do dispositivo</Text>
          <Button title='Permitir o uso da câmera' onPress={ askCameraPermission() } />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.barCodeScanner} />
        </View>

        <View style={styles.footer}>
          <View style={styles.scanButton} >
           {scanned ? <Button  title={'Escanear'} onPress={ () => setScanned(false)}/> : <Button title={'Escaneando'} onPress={ () => setScanned(false)} color='#4388a5'/>}
          </View>
          

          <FlatList
            marginVertical={5}
            marginHorizontal={5}
            data={allCodes}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={ ({item}) => <QrCodeListItem data={item}/> }
          />
          
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accessDenied:{
    margin: 10
  },
  barcodebox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '70%',
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 20
  },
  footer:{
    flex: 1,
    fontSize: 16,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText:{
    fontSize: 16,
    margin: 10
  },
  barCodeScanner:{
    height:'300%', 
    width: '100%'
  },
  scanButton:{
    color:'#4388a5',
    width: '70%',
    marginBottom: 10
  }
});
