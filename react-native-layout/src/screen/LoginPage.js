import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Login Page</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Body</Text>
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
  },
  body: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#dfecec',
    fontSize: 15,
    fontFamily: 'Roboto Bold',
  },
}); 