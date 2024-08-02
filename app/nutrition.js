import React, { useEffect, useState } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
         ScrollView,
         ActivityIndicator,
         RefreshControl }
         from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Food from './Food';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const Nutrition= () => {
    const router=useRouter();
    const APP_ID = '044d5391';
    const APP_KEY = 'bf2113ae55db9cdbeb3d23faa4ba7757';
    const [food_r, setfood_r] = useState([]);
    const [search_food, setSearch_food] = useState('');
    const [search, setSearch] = useState('pizza');
    const [showFood, setShowFood] = useState(false);

    useEffect(() => {
        getFood();
    }, [search]);
    const getFood = async () => {
        try {
            setShowFood(true);
            const response = await fetch(
`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`

            );
            const data = await response.json();
            setfood_r(data.hits);
            setShowFood(false);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setShowFood(false);
        }
    };
    const searchBarUpdate = (text) => {
        setSearch_food(text);
    };
    const searchFunction = () => {
        setSearch(search_food);
        setSearch_food('');
    };
    const refreshFunction = () => {
        getFood();
    };

    return (
      <SafeAreaView style={{ flex: 1,
                       backgroundColor: '#1e1e1e',
                        }}>
      <View style={{flex:1}}>
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
                    You Are What You Eat
        </Text>


            <View style={{ marginHorizontal: 10,
                           marginVertical: 20 ,flexDirection:'row',}}>
                <TextInput style={{ height: 60,
                                    width:wp(74),
                                    borderColor: '#E0E0E0',
                                    borderWidth: 1,
                                    borderRadius: 15,
                                    padding: 8,
                                    backgroundColor: 'white',
                                    marginBottom: 10,
                                    fontSize:17
                                  }}
                           placeholder="Search for food recipes..."
                           placeholderTextColor="#7a7f85"
                           value={search_food}
                           onChangeText={searchBarUpdate}/>
                <TouchableOpacity style={{  backgroundColor: '#a2ed3a',
                                            padding: 12,
                                            borderRadius: 15,
                                            alignItems: 'center',
                                          justifyContent:'center',
                                        height:60,
                                      marginLeft:8}}
                                  onPress={searchFunction}>

                    <FontAwesome5Icons
            name="search"
            size={22}
            color={'#131313'}
            style={{marginHorizontal: 10}}
          />
                </TouchableOpacity>
            </View>

            {showFood ? (
                <ActivityIndicator size="large"
                                   color="#a2ed3a"
                                   style={{ marginTop: 20 }} />
            ) : (
                food_r.length === 0 ? (
                    <Text style={{ textAlign: 'center',
                                   color: '#757575',
                                   marginTop: 20 }}>
                                 No recipes found. Try a different search term.
                    </Text>
                ) : (
                    <ScrollView style={{ marginHorizontal: 15,borderRadius:20 }}
                                refreshControl={
                                 <RefreshControl refreshing={showFood}
                                                 onRefresh={refreshFunction}/>}>
                        {food_r.map((recipe) => (
                            <Food key={recipe.recipe.label}
                                  recipe={recipe.recipe} />
                        ))}
                    </ScrollView>
                )
            )}

            </View>
        </SafeAreaView>
    );
};
export default Nutrition;