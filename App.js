import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './components/Button';
import Category from './components/Category';
import color from './config/colors';
import WelcomeScreen from './screens/WelcomeCreen';

export default function App() {
  return (
    // Product type list
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      <Category
        title = "Sport"
        image = {require("./assets/images/sport.jpg")}
      >
      </Category>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 50
  },
  scrollview:{
    paddingLeft: 20,
    paddingRight: 20
  }
});
