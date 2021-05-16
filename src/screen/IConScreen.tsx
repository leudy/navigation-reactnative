import React from 'react'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { IConComponent } from '../components/IConComponent'
import { AuthContext } from '../context/AuthContext'
import { MyColors } from '../Theme'

export const IConScreen = () => {
    const {changeIcon} = useContext(AuthContext)
    return (
        <View>
            <Text> 
                <IConComponent  iconName='airplane-outline' HandlerClick={changeIcon} />
                <IConComponent  iconName='attach-outline'  HandlerClick={changeIcon} />
                <IConComponent  iconName='bonfire-outline'  HandlerClick={changeIcon}  />
                <IConComponent  iconName='calculator-outline'  HandlerClick={changeIcon}  />
                <IConComponent  iconName='chatbubble-ellipses-outline'  HandlerClick={changeIcon}  />
                <IConComponent  iconName='images-outline'  HandlerClick={changeIcon}  />
                <IConComponent  iconName='leaf-outline'  HandlerClick={changeIcon} /></Text>
        </View>
    )
}
