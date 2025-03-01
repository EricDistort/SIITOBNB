import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
//import Test from './components/Test';
//import Scroll from './components/Scroll';
import ContactList from '../../components/ContactList';
import NavigationPanel from '../../components/NavigationPanel';
import Welcome from '../../components/Welcome';
import Landing from '../../components/Landing';
import Touch from '../../components/Touch';

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <Landing />
        <Touch />
        <ContactList />
      </ScrollView>
      <NavigationPanel />
    </SafeAreaView>
  );
}

