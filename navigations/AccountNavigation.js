import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator();

function AccountNavigation(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    );
}

export default AccountNavigation;