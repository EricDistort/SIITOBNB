import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

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
  container: {flex: 1},
  video: {flex: 1},
  viewbox: {
    backgroundColor: '#FFFFFF',
    height: '45%',
    width: '95%',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default App;
