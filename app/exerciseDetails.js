import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, Text,TouchableOpacity,View } from 'react-native';
import { FadeInDown, FadeInRight } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';
export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router=useRouter();
  return (
    <View className="flex flex-1 bg-black">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
      <Image
       source={{uri:item.gifUrl}}
       contentFit='cover'
       style={{width:wp(100),height:wp(100)}}
       className="rounded-b-[40px]"
      />
      </View>
      <TouchableOpacity onPress={()=>router.back()}
      className="mx-2 absolute rounded-full mt-2 right-0"
      >
       <Anticons name="closecircle" size={hp(5)} color="blue"/>
      </TouchableOpacity>

      <ScrollView className="max-4 space-y-2 mt-3 p-5 bg-black" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Text
          entering={FadeInDown.duration(1000).springify()}
          style={{fontSize:hp(3.5)}}
          className="font-bold text-neutral-800 tracking-wide"
        >
          <Text className="font-bold text-neutral-800 color-white">{item.name}</Text>

        </Text>
        <Text
          entering={FadeInRight.delay(200).duration(300).springify()}
          style={{fontSize:hp(2)}}
          className="text-neutral-700 tracking-wide"
        >
           <Text className="font-bold text-neutral-800 color-white">Equipment: </Text> <Text className="text-neutral-800 color-white">
             {item?.equipment}</Text>
           </Text>
        <Text
          entering={FadeInRight.delay(200).duration(300).springify()}
          style={{fontSize:hp(2)}}
          className="text-neutral-700 tracking-wide"
        >
           <Text className="font-bold text-neutral-800 color-white">Muscle: </Text> <Text className="text-neutral-800 color-white">
             {item?.secondaryMuscles}</Text>
           </Text>
           <Text
          entering={FadeInRight.delay(300).duration(300).springify()}
          style={{fontSize:hp(2)}}
          className="text-neutral-700 tracking-wide"
        >
           <Text className="font-bold text-neutral-800 color-white">Lats: </Text> <Text className="text-neutral-800 color-white">
            {item?.target}</Text>
        </Text>
        <Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{fontSize:hp(3)}}
          className="text-neutral-700 tracking-wide font-bold color-white"
        >
           Instructions
        </Text>
        {
        item.instructions.split(',').map((instruction,index)=>{
            return(
                <Text
                      entering={FadeInDown.delay((index+6)*100).duration(300).springify()}
                      key={instruction}
                      style={{fontSize:hp(2)}}
                      className="text-neutral-800"
                >
                  <Text className="text-neutral-800 color-white">{instruction}</Text>

                </Text>
            )
        })
       }
      </ScrollView>
    </View>

  );
}