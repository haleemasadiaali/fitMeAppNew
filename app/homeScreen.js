import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';


const HomeScreen = ({navigation}) => {
  const router=useRouter();


  return (


      <View style={{flex: 1,backgroundColor:'#131313'}}>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:20}} >
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:hp(2), color:'#EDEDED'}}>
          Welcome Back!
        </Text>
        <Text style={{fontSize:hp(3.5), lineHeight: 45,color:'#EDEDED',fontWeight:'bold'}}>
          Hi! Haleema
        </Text>
        </View>
        {/* <Text style={{fontSize:hp(4), lineHeight: 45,color:'#f43f5e',fontWeight:'bold',marginLeft:5}}>
          Haleema
        </Text> */}
        <View style={{justifyContent:'flex-end',flexDirection:'row',marginBottom:15}}>
        <View className=" rounded-full flex justify-center items-center" style={{height:hp(6),width:hp(6),backgroundColor:'#a2ed3a',marginTop:8,marginRight:10}}>
               <Ionicons name="notifications" size={hp(3)} color="#192126" />
        </View>
        <View style={{alignItems:'center',marginTop:8}}>
              <Image source={require('../assets/images/avatar.jpg')}
              style={{height:hp(6),width:hp(6),borderRadius:30,}}

              />
        </View>
        </View>
      </View>


        {/* <View>
                <ImageSlider/>
      </View> */}

  <ScrollView >
  <Text style={{fontSize:hp(2.5),color:'#EDEDED',fontWeight:'bold',marginTop:20,marginLeft:10}}>
         Programs
  </Text>
  <View >
  <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>router.push('workout')}
              style={{width:wp(44),height:wp(50)}}
              className="flex justify-end p-4 m-4"
            >
             <Image
               source={require('../assets/images/gymFront.jpg')}
               resizeMode='cover'
               style={{width:wp(44),height:wp(50)}}
               className="rounded-[35px] absolute"
             />
             <LinearGradient
             colors={['transparent','rgba(0,0,0,0.9)']}
             style={{width:wp(44),height:hp(15)}}
             start={{x:0.5,y:0}}
             end={{x:0.5,y:1}}
             className="absolute bottom-0 rounded-b-[35px]"
             />
             <Text style={{fontSize:hp(2.3),color:'#EDEDED'}} className=" font-semibold text-center tracking-wide">
                Gym Workouts
             </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.push('yoga')}
              style={{width:wp(44),height:wp(50),}}
              className="flex justify-end p-4 mr-4 mt-4"
            >
             <Image
               source={require('../assets/images/yoga3.jpg')}
               resizeMode='cover'
               style={{width:wp(44),height:wp(50)}}
               className="rounded-[35px] absolute"
             />
             <LinearGradient
             colors={['transparent','rgba(0,0,0,0.9)']}
             style={{width:wp(44),height:hp(15)}}
             start={{x:0.5,y:0}}
             end={{x:0.5,y:1}}
             className="absolute bottom-0 rounded-b-[35px]"
             />
             <Text style={{fontSize:hp(2.3),color:'#EDEDED'}} className=" font-semibold text-center tracking-wide">
                Yoga
             </Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>router.push('bmi')}
              style={{width:wp(44),height:wp(48),}}
              className="flex justify-end p-4 m-4 mt-0"
            >
             <Image
               source={require('../assets/images/calendar1.jpg')}
               resizeMode='cover'
               style={{width:wp(44),height:wp(48)}}
               className="rounded-[35px] absolute"
             />
             <LinearGradient
             colors={['transparent','rgba(0,0,0,0.9)']}
             style={{width:wp(44),height:hp(15)}}
             start={{x:0.5,y:0}}
             end={{x:0.5,y:1}}
             className="absolute bottom-0 rounded-b-[35px]"
             />
             <Text style={{fontSize:hp(2.3),color:'#EDEDED'}} className=" font-semibold text-center tracking-wide">
                BMI Calculator
             </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.push("nutrition")}
              style={{width:wp(44),height:wp(48),}}
              className="flex justify-end p-4 mr-4 "
            >
             <Image
               source={require('../assets/images/nutrition.jpg')}
               resizeMode='cover'
               style={{width:wp(44),height:wp(48)}}
               className="rounded-[35px] absolute"
             />
             <LinearGradient
             colors={['transparent','rgba(0,0,0,0.9)']}
             style={{width:wp(44),height:hp(15)}}
             start={{x:0.5,y:0}}
             end={{x:0.5,y:1}}
             className="absolute bottom-0 rounded-b-[35px]"
             />
             <Text style={{fontSize:hp(2.3),color:'#EDEDED'}} className=" font-semibold text-center tracking-wide">
                Nutrition
             </Text>
            </TouchableOpacity>
     </View>
     </View>


      </ScrollView>
      </View>
   
  )
};

export default HomeScreen;