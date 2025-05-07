import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Svg, {Defs, RadialGradient, Stop, Rect} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.logo}
        source={require('../media/logo.png')}
      />
      <View style={styles.line}>
        <Svg height="500" width="500" viewBox="0 0 300 300">
          <Defs>
            <RadialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%">
              <Stop offset="0%" stopColor="yellow" stopOpacity="1" />
              <Stop offset="100%" stopColor="red" stopOpacity="0" />
            </RadialGradient>
          </Defs>
          //
          <Rect x="0" y="0" width="300" height="300" fill="url(#grad1)" />
        </Svg>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: hp('10%'),
    justifyContent: 'center',
  },

  logo: {
    height: hp('5.4%'),
    width: wp('28%'),
    alignSelf: 'center',
  },

  line: {
    height: hp('0.2%'),
    width: wp('100%'),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 15,
  },
});
