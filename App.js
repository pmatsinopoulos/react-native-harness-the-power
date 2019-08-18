import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator);
