import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Button2 from "../components/button2";

export default function LoginRoutes({ navigation }) {
  const navigateToSignUp = () => {
    navigation.navigate("signup");
  };
  const navigateToSignUpWithmail = () => {
    navigation.navigate("Signinwithmail");
  };
  const navigateToSignUpWithgoogle = () => {
    navigation.navigate("Signinwithgoogle");
  };
  const navigateToSignUpWithApple = () => {
    navigation.navigate("Signinwithapple");
  };

  return (
    <>
      <View>
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={{
            width: 300,
            height: 300,
            alignSelf: "center",
            marginBottom: 100,
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 58, marginTop: -150, alignSelf: "center" }}>
          Let's you in
        </Text>
      </View>
      <View style={{ marginTop: -60, alignSelf: "center" }}>
        {/* <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} /> */}

        <Pressable
          onPress={() => {
            navigation.navigate("Signinwithmail");
          }}
          style={{ marginTop: 20, alignSelf: "center" }}
        >
          <Button2
            onPress={() => {
              navigation.navigate("Signinwithmail");
            }}
            title={[
              <MaterialCommunityIcons name="email" size={24} color="#DB4437" />,
              // <Image source={require('../../assets/google.jpg')} resizeMethod="auto" style={{backgroundColor:'black'}}/>,
              "Continue with email",
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Signinwithgoogle");
          }}
          style={{ marginTop: 20, alignSelf: "center" }}
        >
          <Button2
            onPress={() => {
              navigation.navigate("Signinwithgoogle");
            }}
            title={[
              <AntDesign name="google" size={24} color="#4285F4" />,

              "Continue with Google",
            ]}
          />
        </Pressable>

        <Pressable
          // onPress={() => {
          //   navigation.navigate("Signinwithapple");
          // }}
          style={{ marginTop: 20, alignSelf: "center" }}
        >
          <Button2
            onPress={() => {
              navigation.navigate("Signinwithapple");
            }}
            title={[
              <FontAwesome name="apple" size={24} color="black" />,
              "Continue with Apple",
            ]}
          />
        </Pressable>
      </View>
      <View>
        <Text style={{ color: "grey", marginTop: 20, alignSelf: "center" }}>
          __________________________________or________________________________
        </Text>
      </View>
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        <Button title={"Sign up with password"} />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{ marginTop: 20, alignSelf: "center" }}
      >
        <Text>
          Don't have an account?{""}
          <Text
            style={{ color: "#FB9400", fontWeight: "bold", marginLeft: 20 }}
          >
            Sign up
          </Text>
        </Text>
      </Pressable>
    </>
  );
}