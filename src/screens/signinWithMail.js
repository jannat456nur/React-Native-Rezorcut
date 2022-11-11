import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "../components/input";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/button";
import SmallButton from "../components/smallButton";
import Test from "../components/test";
import Button2 from "../components/button2";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function SigninWithMail() {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <View>
        <Text
          style={{ fontSize: 58, alignSelf: "flex-start", fontWeight: "700",paddingHorizontal:20 }}
        >
          Create Your
        </Text>
        <Text
          style={{
            fontSize: 58,
            alignSelf: "flex-start",
            marginTop: -10,
            fontWeight: "700",
            paddingHorizontal:20
          }}
        >
          Account
        </Text>
      </View>
      <View style={{ paddingHorizontal: 18, paddingVertical: 25 }}>
        <Input placeholder="Email" title={"phone"} />
        <Input placeholder="Password" secureTextEntry />
        <View>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#FB9400" : undefined}
            style={{ alignSelf: "center", marginRight: 140, marginBottom: 20,marginTop:30 }}
          />
          <Text
            style={{ marginTop: -38, alignSelf: "center", marginBottom: 80 }}
          >
            Remember me
          </Text>
          <Button title={"Sign up"} />
        </View>
        <View>
          <Text
            style={{
              color: "grey",
              marginTop: 100,
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            ________________ or continue with _______________{" "}
          </Text>
        </View>
        {/* <SmallButton title={'signin'}/> */}
        {/* <Test name="email" icon="user"/> */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
            marginLeft:40
          }}
        >
          <SmallButton
            title={[
              <MaterialCommunityIcons name="email" size={48} color="#DB4437" />,
            ]}
          />
          <View  style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -75,
            marginLeft:115
          }}>
            <SmallButton
              title={[<AntDesign name="google" size={48} color="#4285F4" />]}
            />
          </View>
         <View  style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -75,
            marginLeft:230
          }}>
         <SmallButton
            title={[<FontAwesome name="apple" size={48} color="black" />]}
          />
         </View>
        </View>
      </View>

      <View>
      <Pressable
        // onPress={() => {
        //   navigation.navigate("Signup");
        // }}
        style={{ marginTop: 20, alignSelf: "center" }}
      >
        <Text>
          Already have an account?{""}
          <Text
            style={{ color: "#FB9400", fontWeight: "bold", marginLeft: 20 }}
          >
            Sign in
          </Text>
        </Text>
      </Pressable>
      </View>
    </>
  );
}
