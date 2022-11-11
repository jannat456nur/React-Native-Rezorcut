import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
  return (
    <>
          <View>
        {/* <Text
          style={{ fontSize: 58, alignSelf: "flex-start", fontWeight: "700",paddingHorizontal:20 }}
        >
          Create Your
        </Text> */}
        <Text
          style={{
            fontSize: 35,
            alignSelf: "flex-start",
            // marginTop: -5,
            fontWeight: "600",
            paddingHorizontal:20
          }}
        >

<AntDesign name="arrowleft" size={40} color="black" />
{""} Fill Your Profile
        </Text>
      </View>
    </>
  )
}