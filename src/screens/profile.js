import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Input from "../components/input";
import Button2 from "../components/button2";
import Test from "../components/test";
import Button3 from "../components/button3";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/button";
import DropdownComponent from "./dropdown";

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
            marginTop: 10,
            fontWeight: "600",
            paddingHorizontal: 20,
          }}
        >
          <AntDesign name="arrowleft" size={40} color="black" />
          {""} Fill Your Profile
        </Text>
      </View>
      <View>
        <Image
          //   resizeMethod="contain"
          style={{
            width: 180,
            height: 180,
            backgroundColor: "#fff",
            borderRadius: 300,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 30,
          }}
          source={require("../../assets/user.png")}
        />
      </View>
      <View>
        <Input placeholder={'Full name'} title={'name'}/>
        <Input placeholder={'Nickname'} title={'name'}/>
        <Input placeholder={'Email'} title={'email'}/>
        {/* <Button3 title={"Full Name"} />
        <Button3 title={"Nickname"} />
        <Button3
          title={[
            "Date of Birth                                                           ",
            <FontAwesome5 name="calendar" size={24} color="grey" />,
          ]}
        />
        <Button3
          title={[
            "email                                                                       ",
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="grey"
            />,
          ]}
        /> */}
        <DropdownComponent/>
        
        {/* <Input title={['email',       <FontAwesome5 name="calendar" size={24} color="grey" />,]}/> */}
        {/* <Input placeholder={["Email",<FontAwesome5 name="calendar" size={24} color="grey" />]} title={''} /> */}
        
        <Button title={'Continue'}/>
      </View>
    </>
  );
}
