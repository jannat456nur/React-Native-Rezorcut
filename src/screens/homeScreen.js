import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Image  source={require('../../assets/test.png')}/>
    </View>
  )
}