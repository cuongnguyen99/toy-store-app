import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from './screens/Screen';
import ListProductScreen from './screens/ListProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import color from './config/colors';
import AuthNavigation from './navigations/AuthNavigation';
import AccountNavigation from './navigations/AccountNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MainNavigation from './navigations/MainNavigation';
import CategoryListScreen from './screens/CategoryListScreen';
import FeedNavigation from './navigations/FeedNavigation';
import OfflineNotice from './components/common/OfflineNotice';
import AuthContext from './auth/context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Auth" component={AuthNavigation}/>
          <Stack.Screen name="Main" component={MainNavigation}/>
          <Stack.Screen name="Profile" component={AccountNavigation}/>
          <Stack.Screen name="Product" component={FeedNavigation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );

}
