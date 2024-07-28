// screens/PlantDetails.js
import { COLORS } from '@/constants/Colors';
import { FONTS } from '@/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function PlantDetail() {

// const PlantDetail = ({navigation,route}: any) => {

  // const ItemOfIndex = useStore((state: any)=>
  //   route.params.id == 'p1' ? state.
  // )

  // console.log('route = ', route.params);

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()} >
        <Ionicons name="arrow-undo-outline" size={24} color="#b3b3b3" style={styles.icon} />
            
      </TouchableOpacity>

      <View style={styles.plantBox}>
        <Image
          style={styles.imagePlant}
          source={require('../assets/images/aglaonemanobg.png')}
        />
        <Text style={styles.text}>Aglaonema</Text>
        <Text style={styles.text1}>Indoor plant</Text>
        <Text style={styles.text2}>
          Aglaonema species, commonly known as the Chinese Evergreen plant, are popular houseplants adored by gardening enthusiasts across the world. These plants add a mesmerizing aesthetic to homes and offices.
        </Text>

        <View style={styles.detailBox}>
          <Image
            style={styles.iconWater}
            source={require('../assets/images/icons8-watering.png')}
          />
          <View style={styles.boxWater}>
            <Text style={styles.textWater}>Water</Text>
            <Text style={styles.textOncea}>1 x weeks</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <Image
            style={styles.iconWater}
            source={require('../assets/images/icons8-sun.png')}
          />
          <View style={styles.boxWater}>
            <Text style={styles.textWater}>Light</Text>
            <Text style={styles.textOncea}>Indirect</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <Image
            style={styles.iconWater}
            source={require('../assets/images/icons8-fertilizer.png')}
          />
          <View style={styles.boxWater}>
            <Text style={styles.textWater}>Firtilizer</Text>
            <Text style={styles.textOncea}>1 x month</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <Image
            style={styles.iconWater}
            source={require('../assets/images/repot.png')}
          />
          <View style={styles.boxWater}>
            <Text style={styles.textWater}>Repot</Text>
            <Text style={styles.textOncea}>1 x year</Text>
          </View>
        </View>

      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#091908",
  },
  button: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Align items vertically centered
    justifyContent: 'center', // Align items horizontally centered
    width: 100, 
    height: 50,
    top: 30,
    left: 7, 
    backgroundColor: "#0F1C0D"
  },
  icon: {
    marginRight: 50,
    marginLeft: 0
  },
  imagePlant: {
    width: 300,
    height: 350,
    top: -275,
    alignSelf: 'center'
  },
  plantBox: {
    backgroundColor: COLORS.white,
    width: 375,
    height: 825,
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
    fontSize: 22,
    color: COLORS.darkgreen,
    marginLeft: 35,
    marginTop: 5,
    top: -250,
    // fontFamily: FONTS.mon.fontFamily
  },
  text2: {
    fontSize: 19.5,
    color: COLORS.darkgreen,
    marginLeft: 35,
    marginTop: 18,
    top: -250,
    textAlign: 'justify',
    width: 265,
    // fontFamily: FONTS.mon.fontFamily
  },
  detailBox: {
    width: 265,
    height: 100,
    backgroundColor: '#e6e6e6',
    left: 35,
    top: -225,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5
  },
  iconWater: {
    width: 40,
    height: 40,
    marginTop: 18,
    marginLeft: 30
    // marginTop: 10,
    // top: -100,
    // left: 75
  },
  boxWater: {
    width: 150,
    height: 75,
    marginLeft: 50,
    marginTop: 15
    // backgroundColor: 'red',
    // marginTop: -400
  },
  textWater: {
    fontSize: 22,
    color: '#8c8c8c'
  },
  textOncea: {
    marginTop: 5,
    fontSize: 18
  }
});

// export default PlantDetail;

function useStore(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}
