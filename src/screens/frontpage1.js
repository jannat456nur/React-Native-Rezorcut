import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Frontpage1() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.upperimage}
        source={require("../../assets/frontpage1.png")}
      />
      <Image
        resizeMode="contain"
        style={styles.downimage}
        source={require("../../assets/frontpage2.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  upperimage: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
    marginTop: "30%",
  },
  downimage: {
    width: "50%",
    height: "50%",
    marginTop:'-25%',
    alignSelf:'center'
  },
});
