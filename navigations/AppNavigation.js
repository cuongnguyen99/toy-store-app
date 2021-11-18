import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MainNavigation from './MainNavigation';
import AccountNavigation from './AccountNavigation';
import FeedNavigation from './FeedNavigation';
import CartContext from '../auth/CartContext';

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
            </App.Navigator>
        </CartContext.Provider>
    );
}

export default AppNavigation;