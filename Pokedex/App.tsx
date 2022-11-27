import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';



export default function App() {


  return (
    
    <NavigationContainer>
      <Navigator/>  
    </NavigationContainer>
  );
}
