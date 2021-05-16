import React,{ useContext } from 'react'
import { Button, Text,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../../context/AuthContext'

export const Saturday = () => {
   const {signIn} = useContext(AuthContext)
   const handlerClick = () =>{
       console.log('calling method....')
       signIn();
   }
    return (
        <View>
            <Text>Saturday Screen</Text>
            <View>
                    <Button title='Entrar' onPress={handlerClick} />
            </View>
        </View>
    )
}
