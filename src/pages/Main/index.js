import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#ddd',
  },
});

const Main = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Base React Native</Text>
      <Text style={styles.sectionDescription}>
        A base React Native app, configured with ESlint, Prettier, EditorConfig,
        Reactotron and React Navigation.
      </Text>
    </SafeAreaView>
  );
};

export default Main;