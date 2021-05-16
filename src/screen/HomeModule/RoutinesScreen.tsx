import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MyColors } from '../../Theme';
import { Friday } from '../RotutinesModule/Friday';
import { Monday } from '../RotutinesModule/Monday';
import { Saturday } from '../RotutinesModule/Saturday';
import { Thursday } from '../RotutinesModule/Thursday';
import { Tuesday } from '../RotutinesModule/Tuesday';
import { Wednesday } from '../RotutinesModule/Wednesday';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialTopTabNavigator();

export const RoutinesScreen = () => {
    // const {top: paddingTop} = useSafeAreaInsets();


    return (
        <Tab.Navigator
            // style={{top:paddingTop}}  
            tabBarOptions={{
                style: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                pressColor: MyColors.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: MyColors.primary
                },
                showLabel:true,

            }}
            sceneContainerStyle={{ backgroundColor: 'white', borderTopWidth: 0, borderWidth: 0 }}   >
            <Tab.Screen name="Monday" component={Monday}
               options={{
                   tabBarIcon:()=>( <Icon    name='rocket' size={20} />   )
               }}
            />
            <Tab.Screen name="Tuesday" component={Tuesday}  options={{
                   tabBarIcon:()=>( <Icon    name='car-side' size={20} />   )
               }} />
            <Tab.Screen name="Wednesday" component={Wednesday}  options={{
                   tabBarIcon:()=>( <Icon    name='charity' size={20} />   )
               }} />
            <Tab.Screen name="Thursday" component={Thursday}   options={{
                   tabBarIcon:()=>( <Icon    name='chess-queen' size={20} />   )
               }}/>
            <Tab.Screen name="Friday" component={Friday}  options={{
                   tabBarIcon:()=>( <Icon    name='rocket' size={20} />   )
               }} />
            <Tab.Screen name="Saturday" component={Saturday}  options={{
                   tabBarIcon:()=>( <Icon    name='city' size={20} />   )
               }} />
        </Tab.Navigator>
    )
}
