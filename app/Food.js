import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Food = ({ recipe }) => {
    const openFood = () => {
        if (recipe.url) {
            Linking.openURL(recipe.url);
        }
    };
    const shareFood = () => {
        if (recipe.url) {
            Linking.openURL(
`mailto:?subject=Check%20out%20this%20recipe&body=${recipe.url}`);
        }
    };
    return (
        <View
            style={{ backgroundColor: '#131313',
                     borderRadius: 15,
                     overflow: 'hidden',
                     marginBottom: 25,
                     shadowColor: '#000',
                     shadowOffset: {
                     width: 0,
                     height: 2,},
                     shadowOpacity: 0.25,
                     shadowRadius: 3.84,
                     elevation: 5,}}>
            <View style={{ position: 'relative' }}>
                <Image style={{ width: '100%',
                                height: 200,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                            borderBottomRightRadius:30,
                        borderBottomLeftRadius:30 }}
                       source={{ uri: recipe.image }}
                       resizeMode="cover"/>

                <View style={{ position: 'absolute',
                               top: 8,
                               left: 8,
                               backgroundColor: '#a2ed3a',
                               paddingVertical: 4,
                               paddingHorizontal: 8,
                               borderRadius: 4,

                               }}>
                    <Text style={{ color: '#131313' ,fontWeight:'bold'}}>
                        {recipe.dishType[0]}
                    </Text>
                </View>

            </View>
            <View style={{ padding: 16 }}>

                <Text style={{ fontSize: 22,
                               fontWeight: 'bold',
                               marginBottom: 5,
                               color: '#a2ed3a' }}>
                    {recipe.label}
                </Text>
                <Text style={{ color: '#a2ed3a' ,fontWeight:'bold', marginBottom: 8}}>
                        {recipe.cuisineType[0]} cuisine
                </Text>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginTop:5}}>
                <View>
                <Text style={{ fontSize: 18,

                               marginBottom: 8,
                               color: '#a2ed3a' }}>
                    {recipe.yield} <Text style={{color:'#ededed'}}>servings</Text>
                </Text>
                <Text style={{ fontSize: 20,
                               fontWeight:'bold',
                               marginBottom: 8,
                               color: '#a2ed3a' }}>
                    {recipe.calories.toFixed(2)} <Text style={{color:'#ededed'}}>kcal</Text>
                </Text>

                </View>

                <View>
                <Text style={{ fontSize:16,

                               marginBottom: 8,
                               color: '#a2ed3a' }}>
                 <Text style={{color:'#ededed'}}>Protein</Text>  {recipe.totalNutrients.PROCNT.quantity.toFixed(1)} g
                </Text>
                <Text style={{ fontSize:16,

                               marginBottom: 8,
                               color: '#a2ed3a' }}>
                    <Text style={{color:'#ededed'}}>Fat</Text>  {recipe.totalNutrients.FAT.quantity.toFixed(1)} g
                </Text>
                <Text style={{ fontSize:16,

                               marginBottom: 8,
                               color: '#a2ed3a' }}>
                   <Text style={{color:'#ededed'}}>Carb</Text>  {recipe.totalNutrients.CHOCDF.quantity.toFixed(1)} g
                </Text>
                </View>
                </View>
                <View style={{ marginBottom: 8 }}>
                    <Text style={{ fontWeight: 'bold',
                                   color: '#ededed',fontSize:18 , marginBottom: 8}}>
                        Ingredients:
                    </Text>
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <Text key={index} style={{ paddingLeft: 16,
                                                   color: '#ededed' ,fontWeight:'bold'}}>
                            {ingredient}
                        </Text>
                    ))}
                </View>
                <View style={{ flexDirection: 'row',
                               justifyContent: 'space-between',
                               alignItems: 'center',marginTop:10 }}>
                    <TouchableOpacity onPress={openFood}>
                        <View style={{ backgroundColor: '#a2ed3a',
                                       padding: 6,
                                       borderRadius: 8,
                                       alignItems: 'center',}}>

                            <Text style={{ color: '#131313',
                                           fontWeight: 'bold' }}>
                                View Recipe
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};
export default Food;