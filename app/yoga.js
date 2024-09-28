import { View, Text, ScrollView, Image, SafeAreaView ,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Yoga() {
  const router=useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch('https://dvssholla.github.io/yogaApp/'); //don't do anything till the data is fetched
      const json = await data.json(); // convert to json
      setData(json["results"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#1e1e1e'}}>
      <ScrollView style={{ flex: 1 }}>

      <TouchableOpacity
         onPress={()=>router.back()}
         className=" mx-4 absolute flex justify-center items-center pr-1 rounded-full "
         style={{height:hp(5.5), width:hp(5.5),backgroundColor:'#a2ed3a'}}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="#131313" />
      </TouchableOpacity>

        <Text style={{fontSize:40,color:'#ededed',alignSelf:'center',fontWeight: 'bold',marginTop:20}}>YOGA</Text>
        <Text style={{fontSize:hp(2),color:'#a2ed3a',alignSelf:'center',marginTop:5,marginBottom:10}}
                 className="font-bold tracking-wider ">
                    Relax <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'#ededed',fontWeight:'bold'}}>. </Text></View>Breathe <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'#ededed',fontWeight:'bold'}}>.</Text></View> Heal
        </Text>
        <Text style={{fontSize:hp(2.7),color:'#EDEDED',fontWeight:'bold',marginTop:20,marginLeft:30}}>
         Poses
  </Text>
        {loading ? (
          <Text>Loading.....</Text>
        ) : (

          data.map((value) => (
            <View style={{flex:1}}>

              <View
                style={{
                  backgroundColor: '#131313',
                  height: 500,
                  width: '90%',
                  borderRadius: 35,
                  marginTop: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginBottom:10
                }}>
            {/* <View
              style={{width:wp(90),height:wp(70)}}
              className="flex justify-end p-4 mb-4"
            >
              <Image
               source={{ uri: value.picture }}
               resizeMode='cover'
               style={{width:wp(90),height:wp(70)}}
               className="rounded-[35px] absolute"
             /> */}

             <Text style={{fontSize:hp(2.3),color:'#EDEDED'}} className=" font-semibold text-center tracking-wide">
           {value.name.english}
             </Text>

            <Text
                  style={{
                    color: '#a2ed3a',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: '0.5%',
                  }}>
                  {value.name.sanskrit}
                </Text>
                <Text
                  style={{
                    color: '#ededed',
                    fontSize: 18,
                    marginTop: '3%',
                    marginHorizontal:10,
                    alignSelf:'flex-start'
                  }}>
                  {value.description}
                </Text>
                <Text
                  style={{
                    color: '#ededed',
                    fontSize: 19,
                    marginTop: '3%',
                    marginHorizontal:10,
                    alignSelf:'flex-start'
                  }}>
                  <Text style={{color: '#a2ed3a'}}>Benefits: </Text>{value.benefits}
                </Text>
            </View>
            </View>
          ))
        )}
        <Text
          style={{
            color: '#a2ed3a',
            fontSize: 10,
            marginTop: '1%',
            alignSelf: 'center',
            marginBottom: '1%',
            fontWeight:'bold'
          }}>
          Credit: Yoga Breeze Bali
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

