import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#3b021f','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'//zooms image if needed
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <StartGameScreen/>
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
