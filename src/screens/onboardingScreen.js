// import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
// import React from "react";
// import { Image } from "react-native-svg";

// const { width, height } = Dimensions.get("window");
// const COLORS = { primary: "#282534", white: "#fff" };

// const slides = [
//   {
//     id: 1,
//     title: "Discover Best Places",
//     description:
//       '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require("../../assets/test.png"),
//   },
//   {
//     id: 2,
//     title: "Choose A Tasty Dish",
//     description:
//       '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require("../../assets/onboardScreen2.png"),
//   },
//   {
//     id: 3,
//     title: "Pick Up The Delivery",
//     description:
//       '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
//     image: require("../../assets/onboardScreen3.png"),
//   },
// ];

// const Slide = ({ item }) => {
//   return (
//     <View style={{ alignItems: "center" }}>
//       <Image
//         source={item.image}
//         style={{
//           height: "75%",
//           resizeMode: "contain",
//           width: "100%",
//           backgroundColor: "pink",
//           margin:20,
//           padding:20,
//         }}
//       />
//       <Text>{item.title}</Text>

//     </View>
//   );
// };

// export default function OnboardingScreen() {
//   return (
//     <View style={{ flex: 1,}}>
//       <FlatList
//       pagingEnabled
//         data={slides}
//         contentContainerStyle={{ height: height * 0.75 }}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => <Slide item={item} />}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({});

import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Button from "../components/button";
import OnboardingButton from "../components/onboardingButton";
import OnboardingButton2 from "../components/onboardingButton2";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const { width, height } = Dimensions.get("window");

// const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: "1",
    image: require("../../assets/image4.jpg"),
    title: "Find Barbers and ",
    subtitle: "Salon easily in Your ",
    subtitle2: " Hands",
  },
  {
    id: "2",
    image: require("../../assets/image2.jpg"),
    title: "Book Your Favourite ",
    subtitle: " Berber And Salon",
    subtitle2: " quickly",
  },
  {
    id: "3",
    image: require("../../assets/image3.jpg"),
    title: "Come To handsome  ",
    subtitle: "And With beautiful",
    subtitle2: " Right Us Now!",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "42%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.title}>{item?.subtitle}</Text>
        <Text style={styles.title}>{item?.subtitle2}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: spacing[5],
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: spacing[10],
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: spacing[10] }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <Button
                onPress={() => navigation.replace("welcome")}
                title={"GET STARTED"}
              />
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <OnboardingButton2
                onPress={skip}
                activeOpacity={0.8}
                title={"SKIP"}
              />
              <View style={{ width: 15 }} />
              <OnboardingButton
                activeOpacity={0.8}
                onPress={goToNextSlide}
                title={"NEXT"}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: colors.black,
    fontSize: 10,
    marginTop: spacing[15],
    maxWidth: spacing[40],
    textAlign: "center",
    lineHeight: 25,
  },
  title: {
    color: colors.black,
    fontSize: 45,
    lineHeight:50,
    fontWeight: "600",
    marginTop: spacing[5],
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: spacing[1],
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
