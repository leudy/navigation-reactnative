import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Platform, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyColors, Styles } from '../Theme'
import { FavoritesScreen } from './HomeModule/FavoritesScreen';
import { PostsScreen } from './HomeModule/PostsScreen';
import { RoutinesScreen } from './HomeModule/RoutinesScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { IConScreen } from './IConScreen';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();

const AndroidTab = createMaterialBottomTabNavigator();
export const MenuAndroid = () => {
    return (<AndroidTab.Navigator 
    barStyle={{backgroundColor:MyColors.primary}}
    sceneAnimationEnabled={true}
    >
        <AndroidTab.Screen name='iconos' component={IConScreen}
            options={{
                tabBarLabel: 'Iconos',
                tabBarIcon: ({ color }) => (
                    <MaterialIcon name='bullhorn-outline' color={color} />
                )
            }}
        />
        <AndroidTab.Screen name='posts' component={PostsScreen}
            options={{
                tabBarLabel: 'Eventos',
                tabBarIcon: ({ color }) => (
                    <MaterialIcon name='bullhorn-outline' color={color} />
                )
            }}
        />
        <AndroidTab.Screen name="routines"
            component={RoutinesScreen}
            options={{
                tabBarLabel: 'Rutinas',
                tabBarIcon: ({ color }) => (
                    <MaterialIcon name='biathlon' color={color} />
                )
            }}
        />
        <AndroidTab.Screen name='favorites' component={FavoritesScreen}

            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color }) => (
                    <MaterialIcon name='heart' color={color} />
                )

            }}

        />
    </AndroidTab.Navigator>)
}
export const MenuIos = () => {
    return (<Tab.Navigator sceneContainerStyle={{ flex: 1, backgroundColor: 'white' }}
        tabBarOptions={{
            activeTintColor: MyColors.primary,
            style: {
                borderTopColor: MyColors.primary,
                borderTopWidth: 0,
                elevation: 0
            }
        }}
    >

<Tab.Screen name='iconos' component={IConScreen}
            options={{
                tabBarLabel: 'Iconos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name='bullhorn-outline' color={color} size={size} />
                )
            }}
        />
        <Tab.Screen name='posts' component={PostsScreen}
            options={{
                tabBarLabel: 'Eventos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name='bullhorn-outline' color={color} size={size} />
                )
            }}
        />
        <Tab.Screen name="routines"
            component={RoutinesScreen}
            options={{
                tabBarLabel: 'Rutinas',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name='biathlon' color={color} size={size} />
                )
            }} 
        />
        <Tab.Screen name='favorites' component={FavoritesScreen}

            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name='heart' color={color} size={size} />
                )

            }}

        />
    </Tab.Navigator>)
}




interface Props extends DrawerScreenProps<any,any>{};

export const HomeScreen = ({navigation}:Props) => {
     useEffect(() => {
        navigation.setOptions({
            headerLeft:()=>( <TouchableOpacity onPress={
               ()=>{ navigation.toggleDrawer()}
            }>
                   <Text><Icon name='menu-outline' size={40} color={MyColors.primary} /></Text>
            </TouchableOpacity> )
        }) 
    }, [])

    return Platform.OS === 'ios' ? <MenuIos /> : <MenuAndroid />
           
    
}
