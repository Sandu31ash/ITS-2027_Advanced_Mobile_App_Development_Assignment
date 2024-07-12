import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function plants() {


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Monstera',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Noen Pothos',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Snake Plant',
        },
        {
            id: 'plant4',
            title: 'ZZ Plant',
        },
    ];

    return (
        <View style={styles.container}>

            <FlatList
                data={DATA}
                renderItem={({item}) => <Text style={styles.nametext}>{item.title}</Text>}      //render item kiyana ekta component ekk dagnna puluwn
                keyExtractor={item => item.id}
            />

            <Text>profile</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    nametext: {
        backgroundColor: "#eeeeee",
        width: 295,
        height: 150,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 15
    },
    container: {
        flex: 1,
        backgroundColor: "#091908"
    }
  });