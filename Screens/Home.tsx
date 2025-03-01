import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
//import Test from './components/Test';
//import Scroll from './components/Scroll';

import ContactList from '../components/ContactList';
import NavigationPanel from '../components/NavigationPanel';
import Welcome from '../components/Welcome';
import Landing from '../components/Landing';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
     
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
  },
});
