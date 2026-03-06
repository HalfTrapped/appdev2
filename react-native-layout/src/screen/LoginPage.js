import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
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
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}); 