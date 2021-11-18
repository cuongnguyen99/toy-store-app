import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={RegisterScreen}
          options={{
            title: "Đăng ký",
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
}

export default AuthNavigation;