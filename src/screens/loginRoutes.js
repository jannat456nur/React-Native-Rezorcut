import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import { FontAwesome } from '@expo/vector-icons';
import Button2 from "../components/button2";
import "expo-dev-client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuth from "../firebase/firebase.init";
// import 'firebase' from 'firebase/compar/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

initializeAuth();

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
  const handleSigninWithApple = () => {};

  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGooglesignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
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
        <Text
          style={{
            fontSize: 58,
            marginTop: -150,
            alignSelf: "center",
            fontWeight: "800",
          }}
        >
          Let's you in
        </Text>
      </View>
      <View style={{ marginTop: '-18%', alignSelf: "center" }}>
        {/* <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} /> */}

        {/* <Pressable
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
        </Pressable> */}

        <Pressable
          onPress={() => {
            navigation.navigate("Signinwithphone");
          }}
          style={{ marginTop: '8%', alignSelf: "center" }}
        >
          <Button2
            onPress={() => {
              navigation.navigate("Signinwithphone");
            }}
            title={[
              <FontAwesome name="phone" size={24} color="black" />,
              "     Continue with phone",
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Signinwithgoogle");
          }}
          style={{ marginTop: '6%', alignSelf: "center" }}
        >
          <Button2
            // onPress={() => {
            //   navigation.navigate("Signinwithgoogle");
            // }}
            onPress={handleGooglesignIn}
            title={[
              <AntDesign name="google" size={24} color="#4285F4" />,
              "   Continue with Google",
            ]}
          />
        </Pressable>

        <Pressable
          // onPress={() => {
          //   navigation.navigate("Signinwithapple");
          // }}
          // onPress={handleSigninWithApple}
          style={{ marginTop: '6%', alignSelf: "center" }}
        >
          <Button2
            // onPress={() => {
            //   navigation.navigate("Signinwithapple");
            // }}
            onPress={handleGooglesignIn}
            title={[
              <FontAwesome name="apple" size={24} color="black" />,
              "   Continue with Apple",
            ]}
          />
        </Pressable>
      </View>
      <View>
        <Text style={{ color: "grey", marginTop: '4%', alignSelf: "center" }}>
          __________________________________     or    ________________________________
          
        </Text>
        {/* <View>
          <View>
            <Text style={{paddingHorizontal:'3%',marginLeft:'3%'}}>
              
              _____________________________________________________________________
            </Text>
          </View>
          <View>
            <Text style={{paddingVertical:'2%', paddingHorizontal:'10%' ,backgroundColor:'pink',  right:'30%' ,position:'absolute',marginTop:'-2%',marginLeft:'45%'}}>or</Text>
          </View>
        </View> */}
      </View>
      <View style={{ marginTop: '5%', alignSelf: "center" }}>
        <Pressable>
          <Button
            onPress={() => {
              navigation.navigate("Signinwithmail");
            }}
            title={"Sign up with password"}
          />
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{ marginTop: '5%', alignSelf: "center" }}
      >
        <Text>
          Don't have an account?{""}
          <Text
            style={{ color: "#FB9400", fontWeight: "bold", marginLeft: '6%' }}
          >
            Sign up
          </Text>
        </Text>
      </Pressable>
    </>
  );
}
