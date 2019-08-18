import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import HomeListScreen from "./screens/HomeListScreen"

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  HomeList: {
    screen: HomeListScreen
  }
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator);
