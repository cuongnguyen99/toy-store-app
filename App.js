import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import AppNavigation from './navigations/AppNavigation';
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>
      <NavigationContainer>
        {user ? <AppNavigation/>:<AuthNavigation/>}
        {/* <AppNavigation/> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );

}
