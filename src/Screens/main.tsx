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
  import FancyCard from '../../components/FancyCard';
  import ContactList from '../../components/ContactList';
  import NavigationPanel from '../../components/NavigationPanel';
  import Welcome from '../../components/Welcome';
  import Landing from '../../components/Landing';
 


export default function Home() {
  
  return (
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Welcome />
          <Landing />
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
      }
})


