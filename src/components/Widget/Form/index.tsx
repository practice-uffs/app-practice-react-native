import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

import { Button } from '../Button';
import { FeedbackType } from '..';
import { Copyright } from '../Copyright';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';
import { theme } from '../../../theme';
import { feedbackTypes } from '../../../utils/feedbackTypes';

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null)

    const feedbackTypeInfo = feedbackTypes[feedbackType]

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
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowLeft
                    size={24}
                    weight='bold'
                    color={theme.colors.text_cinza}
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>
        </View>

        <TextInput 
            multiline
            style={styles.input}
            placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
            placeholderTextColor={theme.colors.text_cinza}
        />

        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={handleScreenshot}
                onRemoveShot={handleScreenshotRemove}
                screenshot={screenshot}
            />

            <Button isLoading={false} />
        </View>

        <Copyright />
    </View>
  );
}