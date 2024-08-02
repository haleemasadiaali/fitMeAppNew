import {View,Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown ,SlideInDown} from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index(){
    const router=useRouter();
    return(
        <View className="flex-1 flex justify-end " style={{backgroundColor:'black',height:'100%'}}>
           <StatusBar style="light"/>
           <Image className="h-full w-full absolute" source={require('../assets/images/getStarted.png')}/>

           <LinearGradient
            colors={['transparent','#18181b']}
            style={{width:wp(100),height:hp(70)}}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:0.8}}
            className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                <Text style={{fontSize:hp(7),color:'#ededed'}} className=" font-bold tracking-wide ">FitMe<Text style={{color:'#a2ed3a'}}>.</Text></Text>
                   <Text style={{fontSize:hp(2),color:'#ededed'}} className=" font-bold tracking-wide">Best
                     <Text style={{color:'#a2ed3a'}}> Workouts</Text> For You
                   </Text>
                   {/* <Text style={{fontSize:hp(2),color:'#ededed'}} className=" font-bold tracking-wide">For You</Text> */}

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(100).springify()}>
                    <TouchableOpacity onPress={()=>router.push('homeScreen')}
                      style={{height:hp(6.5),width:wp(90),backgroundColor:'#a2ed3a'}}
                      className=" flex items-center justify-center mx-auto rounded-full border-[2px]"
                    >
                        <Text style={{fontSize:hp(2.5),color:'#131313'}} className=" font-bold tracking-wide">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>

        </View>
    )
}