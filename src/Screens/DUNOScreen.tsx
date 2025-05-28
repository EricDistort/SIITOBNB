import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
//import Test from './components/Test';
//import Scroll from './components/Scroll';
import ContactList from '../../components/ContactList';

import Welcome from '../../components/Welcome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ViewBox from '../../components/ViewBox';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <ViewBox />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    flex: 1,
  },
});
