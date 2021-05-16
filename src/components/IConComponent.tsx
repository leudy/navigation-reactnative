import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { MyColors } from '../Theme'

interface Props {
    iconName: string,
    HandlerClick: (icon : string) => void
}

export const IConComponent = ({ iconName ,HandlerClick }: Props) => {
    return (
        <TouchableOpacity
            onPress={()=>{ HandlerClick(iconName) }}
        >
            <Icon name={iconName} size={80} color={MyColors.primary} />

        </TouchableOpacity>

    )
}
