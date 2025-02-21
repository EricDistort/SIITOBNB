import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Landingworldwide() {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>

        <View style={styles.circlefive}>
        <Image
          style={styles.webfifth}
          source={require('../media/webfifth.jpg')}
        />
        <Image
          style={styles.webfourth}
          source={require('../media/webfourth.jpg')}
        />
          <View style={styles.circlefour}>
          <Image
            style={styles.webthird}
            source={require('../media/webthird.jpg')}
          />
            <View style={styles.circlethree}>
            <Image
              style={styles.websecond}
              source={require('../media/websecond.jpg')}
            />
              <View style={styles.circletwo}>
              <Image
                style={styles.webfirst}
                source={require('../media/webfirst.jpg')}
              />
                <Image
                  style={styles.centerlogo}
                  source={require('../media/centerlogo.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
        ]} // Red to transparent
        style={styles.titlecontainer}>
        <Text style={styles.heading}>Worldwide Staking</Text>
        <Text style={styles.bio}>
          A Smart Contract designed to offer users a unique staking{'\u00A0'}
          experience with global reach
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Poppins',
    color: '#F0B90B',
    fontWeight: 'semibold',
    fontSize: 25.78,
    alignSelf: 'center',
  },
  bio: {
    fontFamily: 'Poppins',
    color: '#BBBBBB',
    fontWeight: 'medium',
    fontSize: 12.89,
    alignSelf: 'center',
    textAlign: 'center',
  },

  maincontainer: {
    //justifyContent: 'center',
    alignItems: 'center',
  },

  titlecontainer: {
    height: 200,
    width: 340,
    borderRadius: 20,
    //backgroundColor: '#000000',
    //borderWidth: 1.76,
    //borderColor: 'rgba(255, 174, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
  },

  usermap: {},

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    height: 350,
    width: 350,
  },

  circlefive: {
    height: 340,
    width: 340,
    borderRadius: 170,
    backgroundColor: 'transparent',
    borderWidth: 1.76,
    borderColor: 'rgba(255, 174, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlefour: {
    height: 280,
    width: 280,
    borderRadius: 140,
    backgroundColor: 'transparent',
    borderWidth: 1.76,
    borderColor: 'rgba(255, 174, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlethree: {
    height: 220,
    width: 220,
    borderRadius: 110,
    backgroundColor: 'transparent',
    borderWidth: 2.2,
    borderColor: 'rgba(255, 174, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circletwo: {
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: 'transparent',
    borderWidth: 2.2,
    borderColor: 'rgba(255, 174, 0, 8.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerlogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  webfifth: {
    height: 21.5,
    width: 21.5,
    borderRadius: 15,
    position: 'absolute',
    top: -3,
    left: 100,
  },

  webfourth: {
    height: 26.38,
    width: 26.38,
    borderRadius: 50,
    position: 'absolute',
    top: 45,
    left: 283,
  },
  webthird: {
    height: 31.25,
    width: 31.25,
    borderRadius: 50,
    position: 'absolute',
    top: 25,
    left: 25,
  },
  websecond: {
    height: 35,
    width: 35,
    borderRadius: 50,
    position: 'absolute',
    top: -15,
    left: 100,
  },
  webfirst: {
    height: 42,
    width: 42,
    borderRadius: 50,
    position: 'absolute',
    top: 30,
    left: 130,
  },
});
