import React from 'react';
import { Camera, Trash, } from 'phosphor-react-native';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={screenshot ? onRemoveShot : onTakeShot}
    >
        {
            screenshot 
            ? 
                <View>
                    <Image 
                        style={styles.image}
                        source={{ uri: screenshot }}
                    />

                    <Trash 
                        size={22}
                        color={theme.colors.text_cinza}
                        weight='fill'
                        style={{ position: 'absolute', bottom: 0, right: 0}}
                    />
                </View>
            : 
                <Camera 
                    size={24}
                    color={theme.colors.text_cinza}
                    weight='bold'
                />
        }
    </TouchableOpacity>
  );
}