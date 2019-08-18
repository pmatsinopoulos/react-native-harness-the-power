import React from "react"
import { Image, View, StyleSheet, Text } from "react-native"

const HouseItem = (item) => {
  return (
    <View style={styles.houseItemContainer}>
      <Image source={{ uri: item.images }} style={styles.houseImageStyle}/>
      <View style={styles.houseDetailsContainer}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
      </View>
    </View>
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
