import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
          'rgba(0, 0, 0, 0.72)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
        ]}
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
    fontSize: wp('5%'),
    alignSelf: 'center',
  },
  bio: {
    fontFamily: 'Poppins',
    color: '#BBBBBB',
    fontWeight: 'medium',
    fontSize: wp('2.8%'),
    alignSelf: 'center',
    textAlign: 'center',
  },

  maincontainer: {
    alignItems: 'center',
    backgroundColor: 'grey',
    width: wp('100%'),
    height: hp('70%'),
  },

  titlecontainer: {
    height: hp('60%'),
    width: wp('90%'),

    //backgroundColor: '#000000',
    //borderWidth: 1.76,
    //borderColor: 'rgba(255, 174, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp('25%'),
  },

  usermap: {},

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    height: hp('70%'),
    width: wp('100%'),
    backgroundColor: 'black',
  },

  circlefive: {
    height: hp('60%'),
    width: wp('90%'),
    borderRadius: hp('40%'),
    backgroundColor: 'transparent',
    borderWidth: 1.76,
    borderColor: 'rgba(255, 174, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlefour: {
    height: hp('54%'),
    width: wp('80%'),
    borderRadius: hp('40%'),
    backgroundColor: 'transparent',
    borderWidth: 1.76,
    borderColor: 'rgba(255, 174, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlethree: {
    height: hp('47%'),
    width: wp('70%'),
    borderRadius: hp('40%'),
    backgroundColor: 'transparent',
    borderWidth: 2.2,
    borderColor: 'rgba(255, 174, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circletwo: {
    height: hp('40%'),
    width: wp('59%'),
    borderRadius: hp('40%'),
    backgroundColor: 'transparent',
    borderWidth: 2.2,
    borderColor: 'rgba(255, 174, 0, 8.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerlogo: {
    height: hp('32%'),
    width: wp('47%'),
    borderRadius: 50,
  },

  webfifth: {
    height: hp('2.3%'),
    width: wp('3.5%'),
    borderRadius: hp('3%'),
    position: 'absolute',
    top: hp('2.3%'),
    left: wp('20%'),
  },

  webfourth: {
    height: hp('2.3%'),
    width: wp('3.5%'),
    borderRadius: hp('3%'),
    position: 'absolute',
    top: hp('2.3%'),
    left: wp('65%'),
  },
  webthird: {
    height: hp('3%'),
    width: wp('5%'),
    borderRadius: hp('3%'),
    position: 'absolute',
    top: hp('-1.5%'),
    left: wp('40%'),
  },
  websecond: {
    height: hp('4%'),
    width: wp('6%'),
    borderRadius: hp('3%'),
    position: 'absolute',
    top: hp('8%'),
    left: wp('3%'),
  },
  webfirst: {
    height: hp('5%'),
    width: wp('7%'),
    borderRadius: hp('3%'),
    position: 'absolute',
    top: hp('2.5%'),
    left: wp('45%'),
  },
});
