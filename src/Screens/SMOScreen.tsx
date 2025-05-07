import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import ContactList from '../../components/ContactList';
import Welcome from '../../components/Welcome';
import Landing from '../../components/Landing';
import FancyCard from '../../components/FancyCard';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <Landing />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
  },
});
