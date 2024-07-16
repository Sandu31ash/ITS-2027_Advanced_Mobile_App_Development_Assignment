import { View, Text, FlatList, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

export default function plants() {


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            image: 'https://www.pinterest.com/pin/818036719814055943/',
            title: 'Monstera',
            desc: 'Indoor Plant',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            image: '../../assets/images/aglaonema.png',
            title: 'Noen Pothos',
            desc: 'Indoor Plant',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: '../../assets/images/aglaonema.png',
            title: 'Snake Plant',
            desc: 'Indoor Plant',
        },
        {
            id: 'plant4',
            image: '../../assets/images/aglaonema.png',
            title: 'ZZ Plant',
            desc: 'Indoor Plant',
        },
    ];

    return (
        <View style={styles.container}>

            <FlatList style={styles.flatee}
                data={DATA}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.nameText}>{item.title}</Text>
                        <Text style={styles.desc}>{item.desc}</Text>
                    </View>

                }      //render item kiyana ekta component ekk dagnna puluwn
                keyExtractor={item => item.id}
            />

            <Text>profile</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    nameText: {
        // backgroundColor: "#eeeeee",
        // width: 295,
        // height: 150,
        // alignSelf: 'center',
        // borderRadius: 25,
        marginTop: -70,
        marginLeft: 140,
        fontSize: 25,
        // color: "#091908"
    },
    desc: {
        marginTop: 7,
        marginLeft: 140,
        fontSize: 18,
        color: "#091908"
    },
    container: {
        flex: 1,
        backgroundColor: "#091908"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 120,
        marginTop: 10,
        // zIndex: 999,
        // marginLeft: -20
        // alignSelf: 'center'
    },
    item: {
        // alignItems: 'center',
        // alignSelf: 'center'
        backgroundColor: "#eeeeee",
        width: 295,
        height: 150,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 15,
        fontSize: 25,
        color: "#091908"
    },
    flatee: {
        
    }
  });