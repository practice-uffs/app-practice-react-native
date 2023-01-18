import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { SelectList } from 'react-native-dropdown-select-list';
import { theme } from '../../styles/theme';

const CampusPicker = ({
    setSelected,
    dropdownWidth,
    fontWeight,
    inputStyles,
    width,
    ...props
  }) => {

    const { user } = useContext(AuthContext);

    const campus = [
        {key:'cerro-largo', value:'Cerro Largo'},
        {key:'chapeco', value:'Chapecó'},
        {key:'erechim', value:'Erechim'},
        {key:'laranjeiras-do-sul', value:'Laranjeiras do Sul'},
        {key:'passo-fundo', value:'Passo Fundo'},
        {key:'realeza', value:'Realeza'},
    ]

    return (
    <SelectList 
        data={campus}
        setSelected={(val) => setSelected(val)}
        save="key"
        placeholder={user.campus ?? 'Campus'}
        search = {false}
        dropdownStyles= {{backgroundColor: '#fff', width: dropdownWidth, borderColor: theme.colors.darkBlue}}
        dropdownTextStyles={{ color: theme.colors.darkBlue}}
        inputStyles={{color: theme.colors.darkBlue, fontWeight: fontWeight}}
        boxStyles={{ borderColor: theme.colors.darkBlue, borderWidth: 1.5, width: width,}}
    />
    )
};

export default CampusPicker;