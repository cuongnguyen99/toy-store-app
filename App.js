import { StatusBar } from 'expo-status-bar';
import React from 'react';

import WelcomeScreen from './screens/WelcomeCreen';
import Screen from './screens/Screen';
import CategoryListScreen from './screens/CategoryListScreen';
import ListProductScreen from './screens/ListProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
    // <LoginScreen/>
    <RegisterScreen/>
  );
}
