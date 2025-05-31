import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Try both import methods - use whichever works
import Video from 'react-native-video';
// or
// import Video from 'react-native-video/Video';

const App = () => {
  // First verify the Video component exists
  console.log('Video component:', Video);

  // Then verify the video file exists
  try {
    console.log('Video path:', require.resolve('../media/dilight.mp4'));
  } catch (e) {
    console.log('Video path error:', e);
  }

  if (!Video) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: 'red'}}>
          Video component not found! Check your react-native-video installation.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Video
          source={require('../media/dilight.mp4')}
          style={styles.video}
          controls
          resizeMode="contain"
          paused={false}
          onError={error => console.log('Video error:', error)}
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'black' // Add background to debug
  },
  video: {
    width: '100%',  // Use explicit dimensions
    height: '100%',
    backgroundColor: 'transparent'
  },
  viewbox: {
    backgroundColor: '#FFFFFF',
    height: hp('45%'),
    width: wp('95%'),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
    overflow: 'hidden' // Ensure video stays within bounds
  },
});

export default App;
