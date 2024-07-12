import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function profile() {


    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

  return (
    <View>

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
      height:100,
      width:100,
      backgroundColor: 'green',
      marginTop:12
    }
  });