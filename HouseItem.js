import React from "react"
import { Image, View, StyleSheet, Text } from "react-native"
import FadeInView from "./FadeInView";

const HouseItem = (item) => {
  return (
    <FadeInView style={styles.houseDetailsContainer}>
        <Image source={{ uri: item.images }} style={styles.houseImageStyle}/>
        <View style={styles.houseDetailsContainer}>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
        </View>
     </FadeInView>
  )
}

const styles = StyleSheet.create({
  houseItemContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  houseImageStyle: {
    flex: 0.2,
    width: 53,
    height: 81
  },
  houseDetailsContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default HouseItem
