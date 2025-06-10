import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require('../../media/background.jpg')} // adjust the path based on your file structure
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.boundingbox}>
        
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  boundingbox: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
