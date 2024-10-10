import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function Screen03({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <View style={styles.v_info}>
       <View style={styles.img_info}>
       <Image style={styles.img} source={require('../assets/Avatar_27.png')} />
       <View style={styles.txt_info}>
         <Text style={styles.txt_info_1}>Hi Twinkle</Text>
         <Text style={styles.txt_info_2}>Have agrate day a head</Text>
        </View>
        </View>
        <IconAntDesign name="arrowleft" color="#00000" size={20} onPress={() => navigation.goBack()}/> 
      </View>
      
     </View>
     <View style={styles.center}>
      <Text style={styles.ct_txt}>ADD YOUR JOB</Text>
      <View style={styles.txt_view}>
       <Image style={{marginRight:10}} source={require('../assets/list_job.png')}/>
       <TextInput placeholder='input your job'/>
      </View>
      <TouchableOpacity style={styles.bt_finish} onPress={() => navigation.navigate('Screen02')}>
        <Text style={styles.txt_finish}>FINISH</Text>
        <IconAntDesign name="arrowright" color="#ffffff" size={20} /> 
       </TouchableOpacity>
     </View>
     <View style={styles.footer}>
      <Image style={styles.img_footer} source={require('../assets/Image_95.png')}/>
      
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
  img_footer:{
    width: 150,
    height: 150,
  },
  txt_finish:{
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
  },
  bt_finish:{
    backgroundColor: '#00BDD6',
    width: 190,
    height: 44,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  txt_view:{
    borderColor:'#9095A0',
    borderWidth: 1,
    flexDirection: 'row',
    width: 334,
    height: 44,
    alignItems: 'center',
    borderRadius: 4,
  },
  ct_txt:{
    fontSize: 25,
    fontWeight: 'bold',
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
  img_info:{
    flexDirection:'row',
    
  },
  v_info:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,

  },
   header: {
    //flex: 1,
    marginTop: 10,
    justifyContent: 'space-between', 
   // backgroundColor: 'red',
  },
  center:{
    flex:2,
   // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footer:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
