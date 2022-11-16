import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';


export default function CampusPicker() {
    const [campus, setCampus] = useState('cerro-largo');
    return (
    <Picker
    style={{ marginBottom: 10 }}
    mode={"dropdown"}
    selectedValue={campus}
    onValueChange={(itemValue, itemIndex) =>
    setCampus(itemValue)
    }>
    <Picker.Item label="Cerro Largo" value="cerro-largo" />
    <Picker.Item label="Chapecó" value="chapeco" />
    <Picker.Item label="Erechim" value="erechim" />
    <Picker.Item label="Laranjeiras do Sul" value="laranjeiras-do-sul" />
    <Picker.Item label="Passo Fundo" value="passo-fundo" />
    <Picker.Item label="Realeza" value="realeza" />
    </Picker>
    )
};