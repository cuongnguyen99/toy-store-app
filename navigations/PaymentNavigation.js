import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentScreen from '../screens/PaymentScreen';
import CartScreen from '../screens/CartScreen';

const CartStack = createNativeStackNavigator();

function PaymentNavigation(props) {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={CartScreen}
                options={{
                    headerShown: false
                }}
            />
            <CartStack.Screen name="Payment" component={PaymentScreen}
                options={{
                    title: 'Thanh Toán',
                    headerTitleAlign: 'center'
                }}
            />
        </CartStack.Navigator>
    );
}

export default PaymentNavigation;