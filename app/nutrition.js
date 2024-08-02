import {View,Text,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function nutrition(){
    const router=useRouter();
    return(
  <View style={{ flex: 1,backgroundColor:'#1e1e1e'}}>
    <TouchableOpacity
         onPress={()=>router.back()}
         className=" mx-4 absolute flex justify-center items-center pr-1 rounded-full "
         style={{height:hp(5.5), width:hp(5.5),backgroundColor:'#a2ed3a'}}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="#131313" />
      </TouchableOpacity>

        <Text style={{fontSize:40,color:'#ededed',alignSelf:'center',fontWeight: 'bold',marginTop:20}}>NUTRITION</Text>
        <Text style={{fontSize:hp(2),color:'#a2ed3a',alignSelf:'center',marginTop:5,marginBottom:10}}
                 className="font-bold tracking-wider ">
                    You Are What You Eat</Text>

     <View style={{marginHorizontal:10,marginVertical:20,flexDirection:'row'}}>

        <TextInput 
           placeholder="Search for food recipes..."
        />
        <TouchableOpacity>
                <Ionicons name="search-outline"></Ionicons>

        </TouchableOpacity>

     </View>

  </View>
    )
}