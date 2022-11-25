import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function NextButton({ percentage,scrollTo }) {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

        if(progressRef?.current){
          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
    },[percentage]);
  });

  return (
    <View>
      {/* <Svg width={size} height={size}>
        <Circle
          stroke="#E6E7E8"
          cx={center}
          r={radius}
          strokewidth={strokeWidth}
        />
        <Circle
          stroke="#E6E7E8"
          cx={center}
          r={radius}
          cy={center}
          strokewidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * 60) / 100}
        />
      </Svg> */}
      <TouchableOpacity scrollTo={scrollTo} style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrorwright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    boederRadius: 100,
    backgroundColor: "#f4338f",
    padding: 20,
    position: "obsolute",
  },
});
