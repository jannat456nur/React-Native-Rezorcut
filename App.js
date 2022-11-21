import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/signup";
import LoginRoutes from "./src/screens/loginRoutes";
import SigninWithApple from "./src/screens/signinWithApple";
import SigninWithGoogle from "./src/screens/signinWithGoogle";
import SigninWithMail from "./src/screens/signinWithMail";
import Signup from "./src/screens/signup";
import SignInWithphone from "./src/screens/signInWithphone";
import Profile from "./src/screens/profile";
import DropdownComponent from "./src/screens/dropdown";
import Datepicker from "./src/screens/datepicker";
import Signin from "./src/screens/signin";
import Customtab from "./src/screens/customtab";
import Frontpage1 from "./src/screens/frontpage1";
import Welcome from "./src/screens/welcome";
import Slider from "./src/screens/slider";






//keep default theme safe

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "#fff",
  },
};


const Stack = createNativeStackNavigator();

export default function App() {
  // const [user, setUser] = useState(null);
  const user = false; //not authenticated





  // useEffect(()=>{
  //   const authSubscription = onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       setUser(user)
  //     }
  //     else{
  //       setUser(null)
  //       // signOut(null)
  //     }
  //   })
  //   return authSubscription

  // },[])


  return (
    <NavigationContainer theme={AppTheme}>
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Edit" component={Edit}></Stack.Screen>
          <Stack.Screen name="Create" component={Create}></Stack.Screen>
        </>
      ) : (
        <>
        {/* <Stack.Screen name="test0" component={Customtab}></Stack.Screen> */}
        <Stack.Screen name="welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen name="slider" component={Slider}></Stack.Screen>
        <Stack.Screen name="frontpage" component={Frontpage1}></Stack.Screen>
          <Stack.Screen name="test" component={LoginRoutes}></Stack.Screen>
          <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
          {/* <Stack.Screen name="datepicker" component={Datepicker}></Stack.Screen> */}
          {/* <Stack.Screen name="dropdoen" component={DropdownComponent}></Stack.Screen> */}
          {/* <Stack.Screen name="profile" component={Profile}></Stack.Screen> */}
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="Signinwithphone" component={SignInWithphone}></Stack.Screen>
          <Stack.Screen name="Signinwithgoogle" component={SigninWithGoogle}></Stack.Screen>
          <Stack.Screen name="Signinwithapple" component={SigninWithApple}></Stack.Screen>
          <Stack.Screen name="Signinwithmail" component={SigninWithMail}></Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root:{
         backgroundColor:'#white'
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
