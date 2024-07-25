import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import plant from '../../constants/plant';
import { router, useRouter } from 'expo-router';
import plants from '../../constants/plant';

interface Plant {
    id: string;
    img: any; // You can use the correct type if you know it, e.g., ImageSourcePropType
    name: string;
    des: string;
}

export default function Plants() {
    const navigation = useNavigation();
    const router = useRouter();

    return (
        <View style={styles.container}>

           <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} 
                >
                <Ionicons name="arrow-undo-outline" size={24} color="#b3b3b3" style={styles.icon} />
            
            </TouchableOpacity>

            <Text style={styles.plants}>Plants</Text>
            <FlatList
                style={styles.flatee}
                // refreshing={loading}
                data={plant}
                renderItem={({ item }: { item: Plant }) => <Card item={item} navigation={navigation} />}
                keyExtractor={item => item.id.toString()}
            />
            <Text>profile</Text>
        </View>
    );
}

const Card = ({ item, navigation }: { item: Plant, navigation: any }) => (
    <TouchableOpacity onPress={() => navigation.push('plantdetail',{
        id: item.id,
        image: item.img,
        name: item.name,
        des: item.des
    })}>
        <View style={styles.item}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.desc}>{item.des}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        left: 7, 
        backgroundColor: "#0F1C0D"
    },
    icon: {
        marginRight: 50,
        marginLeft: 0
    },
    plants: {
        color: "#eeeeee",
        fontSize: 25,
        marginTop: 60,
        marginBottom: 7.5,
        marginLeft: 60
    },
    flatee: {},
    item: {
        backgroundColor: "#eeeeee",
        width: 295,
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
