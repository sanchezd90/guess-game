import {useState} from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState()

  function pickedGameHandler (pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedGameHandler}/>

  if (userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={['#3b021f','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'//zooms image if needed
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({ 
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
