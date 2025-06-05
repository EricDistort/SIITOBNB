import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from '../../components/Welcome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ViewBox from '../../components/ViewBox';
import MovieList from '../../components/MovieList';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <ViewBox />
        <MovieList />
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
