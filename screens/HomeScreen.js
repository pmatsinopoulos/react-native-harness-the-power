import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('About')} title="About"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center', // how to align children along the cross axis of their container
    justifyContent: 'center' // how to align children within the main axis
    // since flexDirection is by default "column", the main axis is "x" and the cross axis is "y"
  }
})
