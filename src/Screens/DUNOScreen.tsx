import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import Welcome from '../../components/Welcome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ViewBox from '../../components/ViewBox';
import MovieList from '../../components/MovieList';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={require('../../media/background.png')}
        style={styles.background}
        resizeMode="cover">
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: verticalScale(10),
            paddingHorizontal: scale(8),
          }}>
          {/* 
            For TV navigation, ensure all interactive elements 
            inside Welcome, ViewBox, and MovieList use 
            focusable={true} and (optionally) hasTVPreferredFocus={true} 
          */}
          <Welcome />
          <ViewBox />
          <MovieList />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
