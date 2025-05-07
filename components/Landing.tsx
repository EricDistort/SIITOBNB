import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Landingworldwide from './Landingworldwide';
import Herocard from './Herocard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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
    width: wp("100%"), // 80% of screen width
    height: hp("100%"),
    //justifyContent: 'center',
    alignItems: 'center',
  },
});
