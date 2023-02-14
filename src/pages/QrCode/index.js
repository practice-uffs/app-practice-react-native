import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import { theme } from '../../styles/theme';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QrCodeListItem from '../../components/QrCodeListItem';

export default function QrCode({navigation}) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [allCodes, setAllCodes] = useState([])
  const [hasCode, setCode] = useState(false)


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
      setCode(true);
    } else { 
      Alert.alert(
        "Ops!",
        "Este QRCode já foi lido",
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
           {scanned ? <Button  title={'Escanear'} color={theme.colors.darkBlue} onPress={ () => setScanned(false)}/> : <Button title={'Escaneando'} onPress={ () => setScanned(false)} color={theme.colors.darkBlue}/>}
          </View>

          <View style={{ marginTop: 50 }}>
           {scanned ? <View></View> : <Text style={styles.info}>Direcione sua câmera para o QR Code</Text>}
          </View>

          <View style={{ marginTop: 50 }}>
            {hasCode ?
            <View style={styles.flatlistContainer}>
            <FlatList
            marginVertical={5}
            marginHorizontal={5}
            data={allCodes}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={ ({item}) => <QrCodeListItem data={item}/> }
            /></View> : <View></View> }
          </View>
          
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  accessDenied:{
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#003753',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    width: '80%',
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 20
  },
  barCodeScanner:{
    height:'300%', 
    width: '100%'
  },
  footer:{
    flex: 1,
    fontSize: 16,
    width: '100%',
    alignItems: 'center',
  },
  mainText:{
    fontSize: 16,
    margin: 10
  },
  scanButton:{
    width: '35%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    position: 'absolute',
    top: -20
  },
  info: {
    color: '#fff'
  },
  flatlistContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 20,
    height: 250,
    top: -50,
    width: '80%'
  },
  infoOFF: {
    color: '#264653'
  }
});
