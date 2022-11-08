import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Icons = {
    Ionicons,
    Feather,
}

const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export default Icon
