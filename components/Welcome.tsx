import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Svg, {Defs, RadialGradient, Stop, Rect} from 'react-native-svg';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.logo}
        source={require('../media/logo.png')}
      />
      <View style={styles.line}>
        <Svg height="300" width="300" viewBox="0 0 300 300">
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
          <Rect x="0" y="0" width="300" height="300" fill="url(#grad1)" />
        </Svg>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0.2,
    borderColor: '#ffffff',
    height: 50,
    justifyContent: 'center',
  },

  logo: {
    height: 30,
    width: 100,
    alignSelf: 'center',
  },

  line: {
    //width: 300, // Adjust the width of the line
    height: 1,
    justifyContent: 'center', // Adjust the height of the lin
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },
});
