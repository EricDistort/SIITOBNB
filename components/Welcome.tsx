import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Svg, {Defs, RadialGradient, Stop, Rect} from 'react-native-svg';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.logo}
        source={require('../media/logo.png')}
        accessible={true}
        accessibilityLabel="App Logo"
        // TV: images are not focusable, so nothing extra needed here
      />
      <View style={styles.line}>
        <Svg
          height={verticalScale(300)}
          width={scale(300)}
          viewBox="0 0 300 300">
          <Defs>
            <RadialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%">
              <Stop offset="0%" stopColor="white" stopOpacity="1" />
              <Stop offset="100%" stopColor="red" stopOpacity="0" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="300" height="300" fill="url(#grad1)" />
        </Svg>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: verticalScale(40),
    width: scale(110),
    alignSelf: 'center',
    marginBottom: verticalScale(2),
  },
  line: {
    height: verticalScale(1),
    width: scale(300),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
});
