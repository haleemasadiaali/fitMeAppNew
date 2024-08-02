import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect,useLayoutEffect,useState} from 'react';
import { StatusBar, Text,TouchableOpacity,View ,Image} from 'react-native';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { bodyParts, demoExercises } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';


export default function Exercises() {

const router = useRouter();

const[exercises, setExercises] = useState([]);

const item = useLocalSearchParams();

useEffect(() => {

    if(item) getExercises(item.name);


}),[item];


const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);

    setExercises(data);
}


    return (


        <ScrollView className="bg-black">
            <StatusBar style="light"/>


      <TouchableOpacity
         onPress={()=>router.back()}
         className="bg-blue-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
         style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7)}}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
          <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700 color-white">
            {item.name} exercise
          </Text>
          <View className="mb-10">
            <ExerciseList data={exercises}/>
          </View>
      </View>
        </ScrollView>

    );



}