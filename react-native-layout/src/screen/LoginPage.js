import React from 'react';
import SignUp from './SignUpPage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage({navigation}) {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Login Page</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Body</Text>

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15}}>E-mail</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Email"/>

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15}}>Password</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Password" secureTextEntry />

        <TouchableOpacity>
          <Text style={[styles.loginButton, {color: 'white'}]}>Log In Button</Text>
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.text}>Already have an account?
            <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
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
    marginBottom: 15,
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
    marginHorizontal: 20,
    marginBottom: 16,
    borderColor: 'rgb(197, 199, 209)',
    borderWidth: 1.5,
    borderRadius: 15,
    width: '80%',
    backgroundColor: 'rgb(241, 186, 33)',
  },
  signUpText: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#dfecec',
    fontSize: 15,
    fontFamily: 'Roboto Bold',
  },
   textInput: {
    backgroundColor: 'rgb(234, 245, 243)',
    marginTop: 10,
    paddingVertical: 10,
    borderColor: 'rgb(110, 113, 124)',
    borderWidth: 1.5,
    borderRadius: 10,
    width: '80%',
  },
}); 