import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LoginPage  from './LoginPage';
import { useNavigation } from '@react-navigation/native';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
      <View>
        <TouchableOpacity>
          <Text style={styles.text}>Already have an account?
            <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}> Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16, 
    borderColor: 'blue',
    borderWidth: 1,
  },
  body: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderColor: '#dfecec',
    borderWidth: 1,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    color: '#dfecec',
    fontSize: 15,
    fontFamily: 'Roboto Bold',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 16,
    borderColor: '#dfecec',
    borderWidth: 1,
  },
}); 
