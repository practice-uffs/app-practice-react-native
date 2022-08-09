import React, { useState, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { captureScreen } from 'react-native-view-shot';
import { ChatTeardropDots } from 'phosphor-react-native';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { ScreenshotButton } from '../../components/ScreenshotButton';

export function Aura() {
  const [screenshot, setScreenshot] = useState<string | null>(null)

  const bottomSheetRef = useRef<RBSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.open();
  }

  function handleScreenshot(){
    captureScreen({
          format: 'jpg',
          quality: 0.8
      })
      .then(uri => {
          console.log(uri)
          setScreenshot(uri)
      })
      .catch(error => console.log(error))
  }

  function handleScreenshotRemove(){
      setScreenshot(null)
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots 
          size={24}
          weight='bold'
          color={theme.colors.text_brancoClaro}        
        />
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        openDuration={200}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType='none'
        customStyles={{
          wrapper: styles.wrapperRBSheet,
          container: styles.containerRBSheet,
          draggableIcon: styles.draggableIconRBSheet
        }}
      >
        <View style={styles.container}>

          <TextInput 
              multiline
              style={styles.input}
              placeholder='Caixa de dialogo utilizado para se comunicar com a aura...'
              placeholderTextColor={theme.colors.text_cinza}
          />

          <View style={styles.footer}>
              <ScreenshotButton 
                  onTakeShot={handleScreenshot}
                  onRemoveShot={handleScreenshotRemove}
                  screenshot={screenshot}
              />

              <Button isLoading={false} name='Enviar mensagem' />
          </View>
        </View>


      </RBSheet>
    </> 
  );
}

export default gestureHandlerRootHOC(Aura);