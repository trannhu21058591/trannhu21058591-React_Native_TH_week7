import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function Screen02({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <View style={styles.header_1}>
       <IconAntDesign name="arrowleft" color="#00000" size={20} onPress={() => navigation.goBack()} />
       <View style={styles.v_info}>
        <Image style={styles.img} source={require('../assets/Avatar_27.png')} />
        <View style={styles.txt_info}>
         <Text style={styles.txt_info_1}>Hi Twinkle</Text>
         <Text style={styles.txt_info_2}>Have agrate day a head</Text>
        </View>
       </View>
      </View>
      <View style={styles.header_2}>
       <View style={styles.v_search}>
        <IconFeather name="search" color="#00000" size={20} /> 
        <TextInput placeholder='Search'/>
       </View>
      </View>
     </View>
     <View style={styles.center}>

     </View>
     <View style={styles.footer}>
      <TouchableOpacity style={styles.bt_add} onPress={() => navigation.navigate('Screen03')}>
       <IconIonicons name="add" color="#ffffff" size={32} /> 
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  bt_add:{
    backgroundColor: '#00BDD6',
    width: 69,
    height: 69,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  v_search:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    width: 334,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,

  },
  txt_info_2:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#171A1F',
  },

  txt_info_1:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171A1F',
  },
  txt_info:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 50,
    height: 50,
    marginRight: 10,
  },
  v_info:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  header_1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  
  header: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  center: {
    flex: 2,
  },
  footer:{
    flex: 1,
    alignItems: 'center',
  },
  
});
