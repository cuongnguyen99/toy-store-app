import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from './components/Button';
import Category from './components/Category';
import color from './config/colors';
import WelcomeScreen from './screens/WelcomeCreen';
import Screen from './screens/Screen';
import CategoryListScreen from './screens/CategoryListScreen';
import Product from './components/Product';
import ListProductScreen from './screens/ListProductScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen></LoginScreen>
  );
}
