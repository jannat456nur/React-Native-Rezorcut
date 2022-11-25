import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
//npm install npm i react-native-app-intro-slider
// import { COLORS, SIZES } from './src/constants/theme';
// import Router from '../screens/router';
import Router from '../screens/router'

const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../assets/onboardScreen1.png')
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../assets/onboardScreen2.png')
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../assets/onboardScreen3.png')
  }
]

export default function Onboarding2() {
  const [showHomePage, setShowHomePage] = useState(true);

  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor({color:'#f52d56'});

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: '#072FA4',
          fontWeight: '600',
          fontSize: 16,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: '#072FA4',
                fontSize:22,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: '#072FA4',
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor:'#f52d56',
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return(
    <Router />
  )
}
const styles = StyleSheet.create({
   statusbar:{
    color:'#f52d56'
   }
  
  });
  