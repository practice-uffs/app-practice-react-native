import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../context/auth';
import { SelectList } from 'react-native-dropdown-select-list';
import { theme } from '../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                arrowicon={<View style={{ position: 'absolute', right: '2%', width: '10%', height: '100%', alignItems: 'center', display: 'flex', alignSelf: 'center', flex: 1, top: 5 }}><Icon name="chevron-down" size={30} color={'#003753'}/> 
                </View>}
                data={campus}
                setSelected={(val) => setSelected(val)}
                save="key"
                placeholder={user.campus ?? 'Selecionar'}
                search = {false}
                dropdownStyles= {{backgroundColor: '#fff', width: '93%', borderColor: 'white', left: '5%', top: dropdownTop, borderRadius: 0}}
                dropdownTextStyles={{ color: theme.colors.darkBlue}}
                inputStyles={{ fontWeight: fontWeight, color: theme.colors.darkBlue}}
                boxStyles={{ borderColor: 'transparent', width: '100%'}}
            />
    )
};

export default CampusPicker;