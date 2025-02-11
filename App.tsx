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
import Scroll from './components/Scroll';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';
import NavigationPanel from './components/NavigationPanel';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Scroll />
        <FancyCard />
        <ContactList />
      </ScrollView>
      <NavigationPanel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
  },
});
