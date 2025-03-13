import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Landingworldwide from './Landingworldwide';
import Herocard from './Herocard';

export default function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      <Landingworldwide />
      <Herocard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',

    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
