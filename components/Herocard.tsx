import {SafeAreaView, StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

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
  boundingbox: {
    borderColor: '#FFFFFF',
    borderWidth: 0.2,
  },

  containerfirst: {
    height: 150,
    width: 340,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  containersecond: {
    backgroundColor: '#000000',
    height: 148,
    width: 338,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    
  },

  lebelbar: {
    alignSelf: 'center',
    //marginLeft: 20
  },
  containersecondtext: {
    borderWidth: 0.3,
    borderColor: '#FFFFFF'
  },
  containersecondtextfirst: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 38
  },
  containersecondtextwithanimation: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  containersecondtextsecond: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'regular',
    fontSize: 21.55,
  },
  containersecondtextanimation: {
    height: 20,
    width: 20,
    marginLeft: 5,
    marginTop: 7,
  },

  containersecondloadinganimation: {
    height: 5,
    width: 30
  },

});
