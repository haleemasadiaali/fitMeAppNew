import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


export default function workout() {

    const router = useRouter();

    return(
        <SafeAreaView className="flex-1 flex space-y-5" edges={['top']} style={{backgroundColor:'#131313'}}>
        <TouchableOpacity
     onPress={()=>router.back()}
     className=" mx-4 absolute flex justify-center items-center pr-1 rounded-full"
     style={{height:hp(5.5), width:hp(5.5),marginTop:40,backgroundColor:'#a2ed3a'}}
    >
      <Ionicons name="caret-back-outline" size={hp(4)} color="#192126" />
  </TouchableOpacity>

        {/* <View className="flex-row justify-between items-center mx-5"> */}
        {/* style={{alignItems:'center',justifyContent:'center'}} */}
  <View>

    <View className='space-y-2' style={{alignItems:'center', justifyContent:'center'}}>

    <Text
        style={{fontSize:hp(3), color:'#ededed'}}
        className='font-bold tracking-wider'>

Ready To

        </Text>

        <Text
        style={{fontSize:hp(5), color:'#a2ed3a'}}
        className='font-bold tracking-wider'>

Workout

        </Text>

    </View>

    </View>


    <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            borderRadius: 20,
            backgroundColor: 'white',
            marginVertical: 20,
            marginHorizontal:10

          }}>
          <TextInput placeholder="Search Exercises" placeholderTextColor='#7a7f85'  style={{flex: 1,height:'100%',marginLeft:10,fontSize:17}} />
          <FontAwesome5Icons
            name="search"
            size={22}
            color={'#7a7f85'}
            style={{marginHorizontal: 20}}
          />
        </View>
            <View className="flex-1">
              <BodyParts/>
            </View>

    </SafeAreaView>



    );


}