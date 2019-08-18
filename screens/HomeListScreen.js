import React from "react"
import { Button, FlatList, Text, View } from "react-native"
import HouseItem from "../HouseItem";

const MOCK_DATA = [
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images:  'http://hmp.me/ol5'},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images:  'http://hmp.me/ol6'},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images:  'http://hmp.me/ol7'},
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images:  'http://hmp.me/ol5'},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images: 'http://hmp.me/ol6'},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images: 'http://hmp.me/ol7'},
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images: 'http://hmp.me/ol5'},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images: 'http://hmp.me/ol6'},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images: 'http://hmp.me/ol7'},
  {name: 'Mr. Panos Matsinopoulos', address: '625, Sec-5,  Ingsoc', images: 'http://hmp.me/ol6'},
  {name: 'Mr. Alexandros Christopoulos', address: '11, Heights, Oceania', images: 'http://hmp.me/ol7'},
  {name: 'Mr. Paul Mayson', address: '625, Sec-5,  Ingsoc', images: 'http://hmp.me/ol6'},
  {name: 'Mr. George Drako', address: '11, Heights, Oceania', images: 'http://hmp.me/ol7'},
  {name: 'Mr. Aleksandra Avli', address: '625, Sec-5,  Ingsoc', images: 'http://hmp.me/ol6'},
  {name: 'Mr. Charlotte Mann', address: '11, Heights, Oceania', images: 'http://hmp.me/ol7'}
];

const HomeListScreen = props => {
  const { navigate } = props.navigation
  return (
    <FlatList
      data={MOCK_DATA}
      renderItem={({ item }) => <HouseItem {...item}/>}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default HomeListScreen
