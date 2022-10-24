import {useState} from 'react'
import {TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber,setEnteredNumber] = useState('')
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputNumber(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99.',
                [{ text:'Okay', style:'destructive', onPress: resetInputNumber}]
            )
            return
        }

        onPickNumber(chosenNumber)

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none' 
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>                
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({ 
    inputContainer:{
      alignItems: 'center',    
      padding:16,
      marginTop: 100,
      marginHorizontal:24,
      borderRadius: 8,
      backgroundColor: Colors.primary800,
      elevation:4,//android
      shadowColor: 'black', //iOS
      shadowOffset: {width:0,height:2}, //iOS
      shadowRadius: 6, //iOS
      shadowOpacity: 0.25 //iOS,
    },
    numberInput:{
        height:50,
        width:50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }  
  });