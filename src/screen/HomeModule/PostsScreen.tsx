import React from 'react'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

export const PostsScreen = () => {
    const {signIn,authState} = useContext(AuthContext)
    return (
        <View>
            <Text>Posts Screen</Text>
            <Text>{authState.isLoggedIn && 'Hola ,'+authState.username }</Text>
        </View>
    )
}
