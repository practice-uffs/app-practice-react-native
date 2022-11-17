import React from 'react';
import {Picker} from '@react-native-picker/picker';


const CampusPicker = ({
    campus,
    ...props
  }) => {
    return (
    <Picker
        style={{ marginBottom: 10 }}
        mode={"dropdown"}
        selectedValue={campus}
        {...props}
    >
          <Picker.Item key={1} label="Cerro Largo" value="cerro-largo" />
          <Picker.Item key={2} label="Chapecó" value="chapeco" />
          <Picker.Item key={3} label="Erechim" value="erechim" />
          <Picker.Item key={4} label="Laranjeiras do Sul" value="laranjeiras-do-sul" />
          <Picker.Item key={5} label="Passo Fundo" value="passo-fundo" />
          <Picker.Item key={6} label="Realeza" value="realeza" />
    </Picker>
    )
};

export default CampusPicker;