// screens/PlantDetails.js
import { COLORS } from '@/constants/Colors';
import { FONTS } from '@/constants/fonts';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PlantDetail() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.plantBox}>
        <Image
          style={styles.imagePlant}
          source={require('../assets/images/aglaonemanobg.png')}
        />
        <Text style={styles.text}>Aglaonema</Text>
        <Text style={styles.text1}>Indoor plant</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto recusandae molestias eum unde alias ducimus in beatae eos eius minus quasi sit doloribus optio odio, dignissimos repellat temporibus fugiat?
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#091908"
  },
  imagePlant: {
    width: 300,
    height: 350,
    top: -265,
    alignSelf: 'center'
  },
  plantBox: {
    backgroundColor: COLORS.white,
    width: 375,
    height: 425,
    alignSelf: 'center',
    marginTop: 315,
    borderRadius: 25,
    padding: 20
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.darkgreen,
    marginLeft: 35,
    top: -250,
    fontFamily: FONTS.mon.fontFamily
  },
  text1: {
    fontSize: 20,
    color: COLORS.darkgreen,
    marginLeft: 35,
    marginTop: 5,
    top: -250,
    fontFamily: FONTS.mon.fontFamily
  },
  text2: {
    fontSize: 18,
    color: COLORS.darkgreen,
    marginLeft: 35,
    marginTop: 18,
    top: -250,
    textAlign: 'justify',
    width: 265,
    fontFamily: FONTS.mon.fontFamily
  }
});
