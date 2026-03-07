import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignUpScreen';
import ToDoScreen from './src/screens/ToDoScreen';

export default function App() {
  return (
      <WelcomeScreen />
      //<ToDoScreen />
      //<LoginScreen />
      //<SignupScreen />
  );
}


