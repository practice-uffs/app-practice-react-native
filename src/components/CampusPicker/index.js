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
    dropdownRight,
    dropdownTop,
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
                dropdownStyles= {{backgroundColor: '#fff', width: dropdownWidth, borderColor: theme.colors.darkBlue, right: dropdownRight, top: dropdownTop}}
                dropdownTextStyles={{ color: theme.colors.darkBlue}}
                inputStyles={{ fontWeight: fontWeight, color: theme.colors.darkBlue}}
                boxStyles={{ borderColor: 'transparent', width: width,}}
            />
    )
};

export default CampusPicker;