import React, { useEffect, useState } from "react";
import { Button, StatusBar, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, FontVariant, ImageBackground } from "react-native";
import * as Font from 'expo-font';
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "@/app-example/(tabs)";
// import SplashScreen from "./SplashScreenView";

export default function Index() {

  // const [isShowSplash, setIsShowSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(()=>{
  //     setIsShowSplash(false);
  //   }, 3000);
  // });

  // return<>
  //   {isShowSplash ? (
  //     <SplashScreen />
  //   ) : (
  //     <HomeScreen />
  //   )
  // }
  // </>;

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        // 'Chicle-Regular': require('../assets/fonts/Chicle-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

<ImageBackground 
  source={require('../assets/images/background.png')}
  style={styles.image}
>

    <Text style={styles.text}>
      PLANTOO
    </Text>

    <Text style={styles.text1}>
      M o r e   c a r e   t o   y o u r   p l a n t   !
    </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <Ionicons name="arrow-forward" size={24} color="#8e8e8e" style={styles.icon} />
      </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    // height: 747.5,
    width: 383.7
  },
  button: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Align items vertically centered
    justifyContent: 'center', // Align items horizontally centered
    width: 200, 
    height: 50, 
    backgroundColor: "#0F1C0D",
    borderRadius: 25,
    marginBottom: 25,
    top: 280
  },
  buttonText: {
    color: "#8e8e8e",
    fontSize: 21,
    // fontFamily: 'Montserrat-Regular.ttf',
    marginLeft: 75, // Add some space between text and icon
    marginRight: 25,
    bottom: 2,
 },
  icon: {
    marginRight: 50,
    marginLeft: 0
  },

  text: {
    // color: "#243F20",
    color: "#8e8e8e",
    // fontFamily: 'Chicle-Regular.ttf',
    fontSize: 75,
    fontWeight: 'bold',
    alignItems: 'center', // Align items vertically centered
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)', // Shadow color
    textShadowOffset: { width: 3, height: 4 }, // Shadow offset
    textShadowRadius: 10, // Shadow blur radius
    // width: 152,
    width: 260
  },
  text1: {
    color: "#8e8e8e",
    // fontFamily: 'Chicle-Regular.ttf',
    fontSize: 20,
    top: 250
    // alignItems: 'center', // Align items vertically centered
    // justifyContent: 'center'
  }
});