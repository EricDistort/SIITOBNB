import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Herocard() {
  return (
    <SafeAreaView style={styles.boundingbox}>
      <LinearGradient
        colors={[
          'rgb(255, 255, 255)',
          'rgba(255, 255, 255, 0.32)',
          'rgba(0, 5, 0, 0)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.containerfirst}>
        <View style={styles.containersecond}>
          <View style={styles.containersecondtext}>
            <Text style={styles.containersecondtextfirst}>3694</Text>
            <View style={styles.containersecondtextwithanimation}>
              <Text style={styles.containersecondtextsecond}>Users</Text>
              <LottieView
                style={styles.containersecondtextanimation}
                source={require('../media/lebelbar.json')}
                autoPlay
                loop
              />
            </View>
            <LottieView
              style={styles.containersecondloadinganimation}
              source={require('../media/loading.json')}
              autoPlay
              loop
            />
          </View>
          <Image
            style={styles.lebelbar}
            source={require('../media/lebelbar.png')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boundingbox: {},

  containerfirst: {
    height: hp('30%'),
    width: wp('90%'),
    borderRadius: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  containersecond: {
    backgroundColor: '#000000',
    height: hp('29%'),
    width: wp('89%'),
    borderRadius: hp('3%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },

  lebelbar: {
    height: hp('20%'),
    width: wp('31%'),
    
  },
  containersecondtext: {},
  containersecondtextfirst: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: wp("15%"),
  },
  containersecondtextwithanimation: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containersecondtextsecond: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'regular',
    fontSize: wp("5%"),
  },
  containersecondtextanimation: {
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: wp("2%"),
    marginTop: hp('0%'),
  },

  containersecondloadinganimation: {
    height: hp('2%'),
    width: wp('8%'),
  },
});
