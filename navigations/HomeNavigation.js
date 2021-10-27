import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryListScreen from '../screens/CategoryListScreen';
import { Dimensions } from 'react-native';
import color from '../config/colors';

const Tab = createMaterialTopTabNavigator();

function HomeNavigation() {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.sub_text,
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: "bold",
                },
            }}
        >
            <Tab.Screen name="Male" component={CategoryListScreen}/>
            <Tab.Screen name="Female" component={CategoryListScreen}/>
        </Tab.Navigator>
    );
}

export default HomeNavigation;