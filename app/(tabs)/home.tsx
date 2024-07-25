import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image, Touchable } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { AutoFocus } from 'expo-camera/build/legacy/Camera.types';
import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { Icon } from 'react-native-vector-icons/Icon';
import { blue, red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@/constants/Colors';
import Index from '..';
import PlantDetail from '../plantdetail';
// import { plantdetail } from '../plantdetail';

export default function home() {

  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()} >
        <Ionicons name="arrow-undo-outline" size={24} color="#b3b3b3" style={styles.icon} />
      
      </TouchableOpacity>

      <Text style={styles.text}>Hello Ash!</Text>
      <Text style={styles.text1}>Find your favorite plants here</Text>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={Number}
        placeholder="             Search"
        keyboardType="default"
        textAlign= 'left'
      />

      <View style={styles.textViewFav}>
        <Text style={styles.textFav}>My Favourites</Text>
        <TouchableOpacity style={styles.textView} onPress={() => router.push('/plants')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.viewFav}>
          <TouchableOpacity 
            style={styles.viewFavIn} 
            // onPress={() => navigation.navigate('plantdetail')}>
              onPress={() => router.push('plantdetail')}>

            <Image
              style={styles.imageFav}
              source={require('../../assets/images/aglaonema.png')}
            />
          </TouchableOpacity>

          <View style={styles.viewFavInText}>
            <Text style={styles.plantName}>Aglaonema</Text>
            <Text style={styles.plantType}>Indoor plant</Text>

            {/* <Ionicons
              style={styles.checkBox} 
              name={isChecked ? "checkbox-outline" : "square-outline"} 
              size={27} 
              color="#091908" 
            /> */}

            <Ionicons name="heart" size={23} style={styles.checkBox}/>

          </View>
        </View>
      
        <View style={styles.textViewFav}>
          <Text style={styles.textFav}>Most Popular</Text>
          <TouchableOpacity 
            style={styles.textView} 
            // onPress={() => router.push('/plants')}>
            onPress={() => router.push('/plants')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewFav}>
        <TouchableOpacity style={styles.viewFavIn} onPress={() => router.push('neonpothos')}>
          <Image
            style={styles.imageFav}
            source={require('../../assets/images/neon-pothos.png')}
          />
          </TouchableOpacity>

          <View style={styles.viewFavInText}>
            <Text style={styles.plantName}>Neon Pothos</Text>
            <Text style={styles.plantType}>Indoor plant</Text>

            {/* <Ionicons
              style={styles.checkBox} 
              name={isChecked ? "checkbox-outline" : "square-outline"} 
              size={27} 
              color="#091908" 
            /> */}

            {/* <Ionicons name="heart-outline" size={23} color={plants.like ? red : blue} style={styles.checkBox}/> */}

            <Ionicons name="heart-outline" size={23} style={styles.checkBox}/>
          </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#091908",
    paddingTop: 30
  },
  button: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Align items vertically centered
    justifyContent: 'center', // Align items horizontally centered
    width: 100, 
    height: 50,
    top: 30,
    left: 7
  },
  text: {
    fontSize: 31,
    fontWeight: '100',
    color: 'white',
    marginLeft: 50,
    marginTop: 60,
    marginBottom: 10
  },
  text1: {
    fontSize: 18,
    color: 'white',
    marginLeft: 50
  },
  icon: {
    marginRight: 50,
    marginLeft: 0
  },
  input: {
      backgroundColor: '#eeeeee',
      width: 295,
      height: 50,
      borderRadius: 25,
      marginTop: 20,
      marginLeft: 42
  },
  textFav: {
    fontSize: 20,
    color: 'white',
    marginLeft: 50,
    marginTop: 25
  },
  textView: {
    fontSize: 14,
    fontWeight: 'thin',
    color: 'white',
    marginLeft: 125,
    marginTop: 31
  },
  textViewFav: {
    flexDirection: 'row'
  },
  viewFav: {
    flexDirection: 'row',
    backgroundColor: "#eeeeee",
    width: 295,
    height: 150,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 15
  },
  viewAll: {
    color: "#eeeeee"
  },
  viewFavIn: {
    flexDirection: 'row',
    height: 120,
    width: 110,
    borderRadius: 20,
    top: 15,
    bottom: 15,
    left: 5
  },
  imageFav: {
    height: 120,
    width: 110,
    borderRadius: 20,
    top: 1,
    bottom: 15,
    left: 5
  },
  viewFavInText: {
    // flexDirection: 'column'
    marginLeft: 40,
    marginTop: 30
  },
  plantName: {
    fontSize: 25,
    color: "#091908"
  },
  plantType: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 15,
    color: "#091908"
  },
  checkBox: {
    left: 80,
    color: "#3A5A40"
  }
});
