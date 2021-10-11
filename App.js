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

export default function App() {
  return (
    <Screen>
      <Product image={require("./assets/images/lego.jpg")} title="Bộ lego tàu chiến" price="500$"></Product>
      <Product image={require("./assets/images/lego2.jpg")} title="Súng ghép hình bằng lego" price="100$"></Product>
      <Product image={require("./assets/images/lego.jpg")} title="Title này dài vãi lồn để xem nó có ẩn dòng đi không" price="500$"></Product>
    </Screen>
  );
}
