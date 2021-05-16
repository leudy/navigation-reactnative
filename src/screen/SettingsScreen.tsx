import React from 'react'
import { useContext } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext'

export const SettingsScreen = () => {
   

    const {authState} = useContext(AuthContext)


    return (
        <SafeAreaView>
                <Text style={{fontSize:30}}>
                    Configuration Page
                </Text>
                <Text>
                   { JSON.stringify(authState,null,4)}
                    
                
                </Text>
        </SafeAreaView>
    )
}
