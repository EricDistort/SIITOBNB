import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Video
          source={{
            uri: 'https://raw.githubusercontent.com/EricDistort/raw/main/Black%20Sand%20Logo%20Reveal_free%20(online-video-cutter.com).mp4', // ← Replace with your URL
          }}
          style={styles.video}
          controls
          resizeMode="contain"
          paused={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  viewbox: {
    backgroundColor: '#000000',
    height: hp('45%'),
    width: wp('95%'),
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
});

export default App;
