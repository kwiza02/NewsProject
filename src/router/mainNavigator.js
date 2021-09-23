//mainNavigator

import React,{ Component } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../container/dashboardPage";
import Detail from "../container/detailPage";

const Stack = createNativeStackNavigator();

const MainNavigator=()=>{
    return(
       <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}></Stack.Screen>
       </Stack.Navigator>
    )
}

export default MainNavigator;