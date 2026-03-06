import React from 'react';
import Login from './LoginPage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpPage({navigation}) {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/login.png')} style={{width: 100, height: 100}} />
        <Text style={{color: 'black', marginTop: 5, fontSize: 30, fontFamily: 'Lucida Console', fontWeight: 'bold'}}>Sign Page</Text>
        <Text style={{color: 'black', marginTop: 5, fontSize: 15, fontFamily: 'Lucida Console', color: 'gray',textAlign: 'center', width:200}} numberOfLines={2}>Please create an account to continue</Text>
      </View>
      <View style={styles.body}>

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15, fontFamily: 'Lucida Console'}}>Username</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Username"/>

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15, fontFamily: 'Lucida Console'}}>E-mail</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Email"/>

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15, fontFamily: 'Lucida Console'}}>Password</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Password" secureTextEntry />

        <View style={{alignSelf: 'flex-start', marginLeft: 40}}>
          <Text style={{color: 'black', marginTop: 5, fontSize: 15, fontFamily: 'Lucida Console'}}>Confirm Password</Text>
        </View>
        <TextInput style={[styles.textInput, {color: 'black'}]} placeholder="Enter your Confirmed Password" secureTextEntry />
        

        <TouchableOpacity>
          <Text style={[styles.loginButton, {color: 'white'}]}>SignUp Button</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.text}>Already have an account?
            <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 243, 242)',
  },
 
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16, 
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  footer: {
    flex: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto Bold',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 95,
    marginHorizontal: 20,
    marginBottom: 0.5,
    borderColor: 'rgb(197, 199, 209)',
    borderWidth: 1.5,
    borderRadius: 15,
    width: '80%',
    backgroundColor: 'rgb(241, 186, 33)',
  },
  signUpText: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'rgb(27, 11, 250)',
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