import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import slides from "../../slides";
import Onboardingitem from "./onboardingitem";
import Paginator from "./paginator";
import NextButton from "./nextButton";

export default function Onboarding() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setcurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercenThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
          slideRef.current.scrollToIndex({index:currentIndex +1});
    
    }
    else{
      console.log('last item.')
    }

  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <Onboardingitem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator scrollX={scrollX} data={slides} />
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
