import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginPage(){
  return (
    <View style={styles.Pagecontainer}>
      
      <View style={styles.header}>
        <Text>Header</Text>
      </View>

      <View style={styles.body}>
        <Text>Body</Text>
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Pagecontainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  body: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightcoral',
  },
});

