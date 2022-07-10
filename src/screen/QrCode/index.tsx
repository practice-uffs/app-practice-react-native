import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { styles } from './styles';
import { theme } from '../../theme';

export function QrCode({ navigation}: any) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Aguardando leitura...')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);
  
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Solicitando permissão da câmera...</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso à câmera!</Text>
        <Button title={'Permitir câmera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barcodecam} />
      </View>

      <Text style={styles.maintext}>{text}</Text>

      {
        scanned && 
        <Button title={'Escanear novamente'} 
          onPress={() => setScanned(false)} color={theme.colors.azul_claro} 
        />
      }
    </View>
  );
}
