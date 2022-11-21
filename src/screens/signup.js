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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '@react-native-firebase/auth'


export default function Signup({ navigation }) {
  const navigateToSignIn = () => {
    navigation.navigate("Signin");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [agree, setAgree] = useState(false);

  const handleSignup = async () => {
    try {
      // const isUserCreated = await auth().createUserWithEmailAndPassword(email,password)
      // console.log(isUserCreated)
      // console.log('hello')
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result)
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 58,
            alignSelf: "flex-start",
            fontWeight: "700",
            paddingHorizontal: 20,
          }}
        >
          Create Your
        </Text>
        <Text
          style={{
            fontSize: 58,
            alignSelf: "flex-start",
            marginTop: "-5%",
            fontWeight: "700",
            paddingHorizontal: 20,
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
            style={{
              alignSelf: "center",
              marginRight: "40%",
              marginBottom: "5%",
              marginTop: 0,
            }}
          />
          <Text
            style={{
              marginTop: "-10%",
              alignSelf: "center",
              marginBottom: "20%",
            }}
          >
            Remember me
          </Text>
          <Button 
          onPress={()=> handleSignup ()}
          
          
          title={"Sign up"} />
        </View>
        <View>
          <Text
            style={{
              color: "grey",
              marginTop: "30%",
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
            marginTop: "10%",
            marginLeft: "10%",
          }}
        >
          <SmallButton
            title={[<FontAwesome name="phone" size={48} color="black" />]}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-22%",
              marginLeft: "33.5%",
            }}
          >
            <SmallButton
              title={[<AntDesign name="google" size={48} color="#4285F4" />]}
            />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-22%",
              marginLeft: "66%",
            }}
          >
            <SmallButton
              title={[<FontAwesome name="apple" size={48} color="black" />]}
            />
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={{ marginTop: "5%", alignSelf: "center" }}
        >
          <Text>
            Already have an account?{""}
            <Text
              style={{ color: "#FB9400", fontWeight: "bold", marginLeft: "6%" }}
            >
              Sign in
            </Text>
          </Text>
        </Pressable>
      </View>
    </>
  );
}
