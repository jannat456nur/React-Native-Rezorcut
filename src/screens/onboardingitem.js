import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

export default function Onboardingitem({item}) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{flex:0.3}}>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    width:'100%',
    height:'100%',
    justifyContent: "center",
    backgroundColor:'pink'
  },
  title:{
    fontSize:28,
    fontWeight:'800',
    marginBottom:10,
    color:'#493d8a',
    textAlign:'center'
  },
  description:{

    fontWeight:'300',
    color:'#62656b',
    textAlign:'center',
    paddingHorizontal:64,
  },
});
