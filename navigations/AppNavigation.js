import React, { useEffect, useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MainNavigation from './MainNavigation';
import AccountNavigation from './AccountNavigation';
import FeedNavigation from './FeedNavigation';
import CartContext from '../auth/CartContext';
import { AppState } from 'react-native';
import PaymentScreen from '../screens/PaymentScreen';

import cache from '../utility/cache';
import userApi from '../api/users';
import ListProductScreen from '../screens/ListProductScreen';
import DetailProductScreen from '../screens/DetailProductScreen';

const App = createNativeStackNavigator();

const AppNavigation = () => {
    const [cart, setCart] = useState([]);

    const getCart = async () => {
        const accessToken = await cache.get("AccessToken");

        const res = await userApi.getUserInfor(accessToken);
        if(!res.ok) {
            setErrMessage("Fail to get Cart!");
            return setloginFail(true);
        }
        setCart(res.data.cart);
    }

    useEffect(function() {
        getCart();
    }, []);

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
                <App.Screen name="DetailProduct" component={DetailProductScreen}
                options={{
                    headerShown: false,
                }}
                />
            </App.Navigator>
        </CartContext.Provider>
    );
}

export default AppNavigation;