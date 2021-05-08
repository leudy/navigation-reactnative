import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../Theme'
import { FavoritesScreen } from './HomeModule/FavoritesScreen';
import { PostsScreen } from './HomeModule/PostsScreen';
import { RoutinesScreen } from './HomeModule/RoutinesScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();


export const HomeScreen = () => {
    return (
        <Tab.Navigator sceneContainerStyle={{ flex: 1 }}>
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
        </Tab.Navigator>

    )
}
