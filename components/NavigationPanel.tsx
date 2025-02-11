import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Siri from './Siri';

export default function NavigationPanel() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    flexDirection: 'row',
    backgroundColor: '#dceafa',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    alignSelf: 'center',
    flex: 1,
    height: 80,
    right: 0,
    left: 0,

    // position: 'fixed'
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
