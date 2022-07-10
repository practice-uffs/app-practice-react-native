import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from './Options';
import { Success } from './Success';
import { Form } from './Form';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  //const [feedbackType, setFeedbackType] = useState<FeedbackType | null>('BUG');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('BUG');
  const [feedbackSend, setFeedbackSend] = useState(false);

  const bottomSheetRef = useRef<RBSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.open();
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
        <Options />
        <Form feedbackType={feedbackType}/>
        <Success /> 
        {/* {
          feedbackSend ?
            <Success /> 
          :
            <>
              {
              feedbackType ?
                <Form feedbackType={feedbackType}/>
              :
                <Options />
              }
            </>
        } */}
      </RBSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);