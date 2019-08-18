import React from "react"
import { Button, StyleSheet, Image, View } from "react-native"
import panos from "../assets/panos.jpg"

const AboutScreen = (props) => {
  return (
    <View style={styles.aboutView}>
      <Image source={panos} style={styles.aboutImage}/>
      <View style={styles.buttonForHome}>
        <Button title="Home" onPress={() => props.navigation.navigate("Home")} />
      </View>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  aboutView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  aboutImage: {
    flex: 1,
    width: "100%"
  },
  buttonForHome: {
    flex: 0.1
  }
})
