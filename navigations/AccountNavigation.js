import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigation from './AuthNavigation';
import BillScreen from '../screens/BillScreen';

const Stack = createNativeStackNavigator();

function AccountNavigation(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Bill" component={BillScreen}
                options={
                    {
                        title: "Hóa đơn",
                        headerShown: true,
                        headerTitleAlign: 'center'
                    }
                }
            />
        </Stack.Navigator>
    );
}

export default AccountNavigation;