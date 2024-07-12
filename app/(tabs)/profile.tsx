import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export default function profile() {

    return (
      <View style={styles.container}>

        <View style={styles.profileCon}>

          <Text style={styles.profile1}>Profile</Text>

          <TouchableOpacity style={styles.viewFavIn} onPress={() => router.push('/plants')}>
            <Image
              style={styles.settings}
              source={require('../../assets/images/settings.png')}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.viewFav}>
      <TouchableOpacity style={styles.viewFavIn} onPress={() => router.push('/profile')}>
        <Image
          style={styles.imageFav}
          source={require('../../assets/images/pro-pic.png')}
        />
        </TouchableOpacity>

        <View style={styles.viewFavInText}>
          <Text style={styles.plantName}>Ash</Text>

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
    backgroundColor: "#091908"
  },
  profileCon: {
    flexDirection: 'row'
  },
  profile1: {
    color: "#eeeeee",
    fontSize: 25,
    marginTop: 50,
    marginLeft: 60
    // marginBottom: 0
  },
  viewFav: {
    flexDirection: 'column',
    // alignContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eeeeee",
    width: 295,
    height: 280,
    alignSelf: 'center',
    borderRadius: 25
    // marginTop: 0
  },
  viewAll: {
    color: "#eeeeee"
  },
  viewFavIn: {
    // flexDirection: 'row',
    height: 120,
    width: 110,
    borderRadius: 20,
    marginTop: 30,
  },
  imageFav: {
    height: 150,
    width: 150,
    borderRadius: 120
  },
  viewFavInText: {
    // flexDirection: 'column'
    marginLeft: 40,
    marginTop: 30
  },
  plantName: {
    fontSize: 30,
    fontWeight: '700',
    color: "#091908",
    marginTop: 40
  },
  settings: {
    height: 25,
    width: 25,
    marginTop: 40,
    marginLeft: 175
  }
});