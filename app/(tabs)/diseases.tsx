import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import disease from '../../constants/disease';

interface Disease {
  id: number;
  img: any; // You can use the correct type if you know it, e.g., ImageSourcePropType
  diseaseName: string;
  cure: string;
}

export default function diseases() {


//   const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         image: '../../assets/images/aglaonema.png',
//         title: 'Monstera',
//         desc: 'Indoor Plant',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         image: '../../assets/images/aglaonema.png',
//         title: 'Noen Pothos',
//         desc: 'Indoor Plant',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         image: '../../assets/images/aglaonema.png',
//         title: 'Snake Plant',
//         desc: 'Indoor Plant',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d77',
//         image: '../../assets/images/aglaonema.png',
//         title: 'ZZ Plant',
//         desc: 'Indoor Plant',
//     },
// ];


  return (
    <View style={styles.container}>

      <Text style={styles.diseases}>Diseases</Text>

      <FlatList style={styles.flatee}
        data={disease}
        renderItem={({ item }: { item: Disease }) => <Card item={item} />}
        keyExtractor={item => item.id.toString()}
          // <View style={styles.item}>
          //   <Image source={{ uri: item.image }} style={styles.image} />
          //   <Text style={styles.nameText}>{item.title}</Text>
          //   <Text style={styles.desc}>{item.desc}</Text>
          // </View>

        //}      //render item kiyana ekta component ekk dagnna puluwn
        // keyExtractor={item => item.id}
      />

    </View>
  )
}

const Card = ({ item }: { item: Disease }) => (
  <View style={styles.item}>
    <Image source={item.img} style={styles.image} />
    <Text style={styles.nameText}>{item.diseaseName}</Text>
    <Text style={styles.desc}>{item.cure}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#091908"
    },
    diseases: {
      color: "#eeeeee",
      fontSize: 25,
      marginTop: 55,
      marginBottom: 7.5,
      marginLeft: 60
    },
    flatee: {
      
    },
    item: {
      backgroundColor: "#eeeeee",
      width: 295,
      // height: 280,
      height: 162,
      alignSelf: 'center',
      borderRadius: 25,
      marginTop: 7.5,
      marginBottom: 7.5,
      fontSize: 25,
      color: "#091908"
    },
    image: {
      width: 100,
      height: 120,
      borderRadius: 15,
      margin: 20,
    },
    nameText: {
      marginTop: -130,
      marginLeft: 140,
      fontSize: 24,
      color: "#091908",
      fontWeight: 'semibold'
    },
    desc: {
      marginTop: 5,
      marginLeft: 140,
      fontSize: 17,
      color: "#091908",
      width: 140
    }
});