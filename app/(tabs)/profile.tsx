import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function profile() {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
          <TouchableOpacity style={styles.viewFavIn} onPress={pickImage}>
            <Image
              style={styles.imageFav}
              source={require('../../assets/images/pro-pic.png')}
            />
            {image && <Image source={{ uri: image }} style={styles.pic} />}
          </TouchableOpacity>

          <View style={styles.viewFavInText}>
            <Text style={styles.plantName}>Ash</Text>
          </View>

        </View>

        <View>

          <View>
            <Text style={styles.text}>Username</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              value="              Ash"
              placeholder="             Username"
              keyboardType="default"
              textAlign= 'left'
            />
          </View>

          <View>
          <Text style={styles.text}>Phone no</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              value="              +94775255257"
              placeholder="             Phone no"
              keyboardType="default"
              textAlign= 'left'
            />
          </View>
          
          <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            value="              ash31@gmai.com"
            placeholder="             Email"
            keyboardType="default"
            textAlign= 'left'
          />
          </View>

          <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            value="              ********"
            placeholder="              Password"
            keyboardType="default"
            textAlign= 'left'
          />
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
    marginTop: 55,
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
    borderRadius: 25,
    marginTop: -75
  },
  viewAll: {
    color: "#eeeeee"
  },
  viewFavIn: {
    // flexDirection: 'row',
    height: 150,
    width: 150,
    borderRadius: 120,
    marginTop: 20,
    // marginLeft: -20
    alignSelf: 'center'
  },
  imageFav: {
    height: 150,
    width: 150,
    borderRadius: 120,
    marginTop: 20,
    // marginLeft: -20
    alignSelf: 'center'
  },
  pic: {
    height: 150,
    width: 150,
    borderRadius: 120,
    marginTop: -150,
    // marginLeft: -20
    alignSelf: 'center'
  },
  viewFavInText: {
    // flexDirection: 'column'
    // marginLeft: 40,
    marginTop: 40,
    alignSelf: 'center'
  },
  plantName: {
    fontSize: 30,
    fontWeight: '700',
    color: "#091908",
    marginTop: 12
  },
  settings: {
    height: 25,
    width: 25,
    marginTop: 38,
    marginLeft: 175
  },
  text: {
    color: "white",
    marginLeft: 50,
    marginTop: 5
  },
  input: {
    backgroundColor: '#eeeeee',
    marginTop: 5,
    width: 300,
    height: 50,
    alignSelf: 'center',
    borderRadius: 25
  }
});