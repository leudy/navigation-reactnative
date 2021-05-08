import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/HomeScreen';
import { SettingsScreen } from '../screen/SettingsScreen';
import { View,Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from '../Theme';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginModule/LoginScreen';
import { RegisterScreen } from '../screen/LoginModule/RegisterScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const loginStack = ()  => 
{
    return (<Stack.Navigator>
       <Stack.Screen name='Login' component={LoginScreen} />
       <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>)
}

const HomeStack = () => {
 return (
     <Stack.Navigator initialRouteName='App' screenOptions={{}}>
            <Stack.Screen name='App' component={HomeScreen} />
     </Stack.Navigator>
 )

}



export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='home'
         drawerContent={(props)=> <Menulayout  {...props} /> }
        >
             <Drawer.Screen name='home' component={HomeStack} />
            <Drawer.Screen name="settings" component={SettingsScreen} /> 
        </Drawer.Navigator>
    )   
}



const Menulayout = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>)=> {
    return (<DrawerContentScrollView>
<View>
    <Image source={{uri:'data:image/jpeg;base64,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' }}
    style={Styles.avatar}
    />
</View>
    <View style={Styles.menuContainer}>
    
        <TouchableOpacity
        style={Styles.menuButton}
        onPress={()=>{ navigation.navigate('home')
        }}
        >
            <Text style={Styles.menuText}>
            Home
        </Text>
        </TouchableOpacity>
    
        <TouchableOpacity
        style={Styles.menuButton}
        onPress={()=>{
            navigation.navigate('settings')
        }}
        >
            <Text style={Styles.menuText}>
            Configuracion
        </Text>
        </TouchableOpacity>

    
    </View>

 </DrawerContentScrollView>);
};
    
    
 





