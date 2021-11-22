import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MainNavigation from './MainNavigation';
import AccountNavigation from './AccountNavigation';
import FeedNavigation from './FeedNavigation';
import CartContext from '../auth/CartContext';
import { AppState } from 'react-native';
import PaymentScreen from '../screens/PaymentScreen';

const App = createNativeStackNavigator();

const AppNavigation = () => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            <App.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <App.Screen name="Main" component={MainNavigation}/>
                <App.Screen name="Profile" component={AccountNavigation}/>
                <App.Screen name="Product" component={FeedNavigation}/>
                <App.Screen name="Payment" component={PaymentScreen}
                    options={{
                        headerShown: true,
                        title: 'Thanh toán',
                        headerTitleAlign: 'center'
                    }}
                />
            </App.Navigator>
        </CartContext.Provider>
    );
}

export default AppNavigation;