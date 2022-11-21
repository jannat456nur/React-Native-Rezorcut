import {
  Dimensions,
  ImageStore,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/button";

const image = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_960_720.jpg",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Slider() {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {image.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={[styles.wrap]}
              source={{ uri: e }}
            ></Image>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {image.map((e, index) => (
            <Text

              key={e}
              style={[imgActive == index ? styles.dotActive : styles.dot]}
            >
              {/* <Button /> */}⬤
            </Text>
          ))}
        </View>
        <Text style={{marginLeft:'30%',marginTop:'20%'}}>Find barbers and Salons in your hand</Text>
        <View style={{marginTop:'20%'}}>
          <Button title={'Next'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.75,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
    marginBottom:'20%'
    
  },
  dot: {
    margin: 3,
    color: "#fff",
  },
  button: {},
});
