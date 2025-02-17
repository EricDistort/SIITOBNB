import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Siri from './Siri';
import {BlurView} from '@react-native-community/blur';

export default function NavigationPanel() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BlurView
          style={styles.BlurVie}
          blurType="light" // You can use 'dark', 'light', or 'xlight'
          blurAmount={10} // Adjust the blur intensity
          // Fallback color for devices that don't support blur
        >
          <View style={[styles.card, styles.cardOne]}>
            <LottieView
              style={styles.homeAnimation}
              source={require('../media/searchNavigate.json')}
              autoPlay
              loop
            />
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <LottieView
              style={styles.homeAnimation}
              source={require('../media/eyeNavigate.json')}
              autoPlay
              loop
            />
          </View>

          <Siri />

          <View style={[styles.card, styles.cardFour]}>
            <LottieView
              style={styles.homeAnimation}
              source={require('../media/locationNavigate.json')}
              autoPlay
              loop
            />
          </View>

          <View style={[styles.card, styles.cardFive]}>
            <LottieView
              style={styles.homeAnimation}
              source={require('../media/globalNavigate.json')}
              autoPlay
              loop
            />
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
  },

  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: -2,
    flex: 1,
    height: 80,
    right: 0,
    left: 0,
    overflow: 'hidden',
  },

  BlurVie: {
    //padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    position: 'absolute',
    bottom: -2,
    flex: 1,
    height: 80,
    right: 0,
    left: 0,
    flexDirection: 'row',
  },

  cardOne: {
    //backgroundColor: 'transparent',
  },

  cardTwo: {
    //backgroundColor: 'green',
  },

  cardThree: {
    //backgroundColor: 'yellow',
  },

  cardFour: {
    //backgroundColor: 'grey',
  },

  cardFive: {
    //backgroundColor: 'blue',
  },

  cardSix: {
    //backgroundColor: 'pink',
  },

  card: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    //resizeMode: 'contain',
    //backgroundColor: 'yellow',
    borderRadius: 5,
    margin: 5,
    overflow: 'hidden',
  },

  storyImage: {
    height: 100,
    width: 80,
  },

  homeAnimation: {
    height: 30,
    width: 30,
  },

  homeAnimationz: {
    height: 50,
    width: 50,
  },
});
