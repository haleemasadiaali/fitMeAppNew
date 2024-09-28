// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,
    StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const App = () => {
   const router = useRouter();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    const countBmi = () => {
        const bmi = (parseFloat(weight) /
            ((parseFloat(height) / 100) ** 2)).toFixed(2);

        let result = '';
        if (bmi < 18.5) {
            result = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result = 'Healthy';
        } else if (bmi >= 25 && bmi <= 29.9) {
            result = 'Overweight';
        } else if (bmi >= 30 && bmi <= 34.9) {
            result = 'Obese';
        } else if (bmi >= 35) {
            result = 'Extremely obese';
        }

        // Set the BMI result
        setBmiResult({ bmi, result });

        // Reset the form
        setHeight('');
        setWeight('');

    };

    return (
        <View style={styles.container}>
        <TouchableOpacity
         onPress={()=>router.back()}
         className=" mx-4 absolute flex justify-center items-center pr-1 rounded-full "
         style={{height:hp(5.5), width:hp(5.5),backgroundColor:'#a2ed3a',marginTop:100}}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="#131313" />
      </TouchableOpacity>

            <Text style={styles.header}>
                BMI Calculator
            </Text>


            <View style={styles.form}>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>
                        Height (cm)
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your height"
                        onChangeText={setHeight}
                        value={height}
                        keyboardType="numeric"
                        placeholderTextColor={'#ededed'}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>
                        Weight (kg)
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your weight"
                        onChangeText={setWeight}
                        value={weight}
                        keyboardType="numeric"
                        placeholderTextColor={'#ededed'}
                    />
                </View>


                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={countBmi}
                >
                    <Text style={styles.submitButtonText}>
                        Calculate BMI
                    </Text>
                </TouchableOpacity>
                {bmiResult && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultLabel}>
                            BMI:
                        </Text>
                        <Text style={styles.resultText}>
                            {bmiResult.bmi}
                        </Text>
                        <Text style={styles.resultLabel}>
                            Result:
                        </Text>
                        <Text style={styles.resultText}>
                            {bmiResult.result}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',

    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#a2ed3a',
        marginBottom: 20,
        marginTop:150
    },
    form: {
        backgroundColor: '#131313',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        elevation: 5,
        alignSelf:'center',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        color:'#a2ed3a'
    },
    textInput: {
        flex: 2,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 16,
        color:'#ededed'
    },

    submitButton: {
        backgroundColor: '#a2ed3a',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#131313',
    },
    resultContainer: {
        marginTop: 20,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#a2ed3a'
    },
    resultText: {
        fontSize: 16,
        color:'#ededed'
    },
});

export default App;
