import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { SelectList } from 'react-native-dropdown-select-list';

const CampusPicker = ({
    setSelected,
    dropdownStylesProps,
    dropdownItemStylesProps,
    dropdownTextStylesProps,
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
        dropdownStyles= {dropdownStylesProps}
        dropdownItemStyles = {dropdownItemStylesProps}
        dropdownTextStyles = {dropdownTextStylesProps}
    />
    )
};

export default CampusPicker;