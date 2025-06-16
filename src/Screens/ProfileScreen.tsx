import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require('../../media/background.png')}
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.boundingbox}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Profile Screen</Text>
        </View>
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
    padding: moderateScale(10),
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    backgroundColor: 'rgba(0,0,0,0.18)',
    borderRadius: moderateScale(14),
    paddingVertical: verticalScale(24),
    paddingHorizontal: scale(32),
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    paddingHorizontal: scale(10),
    textAlign: 'center',
  },
});
