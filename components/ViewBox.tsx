import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const scheduleUrl =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

const App = () => {
  const [schedule, setSchedule] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<any>(null); // Add a ref

  useEffect(() => {
    fetch(scheduleUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSchedule(data);
        } else {
          throw new Error('Invalid schedule format');
        }
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  if (!schedule) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let currentMovie = null;
  let seekTo = 0;

  for (const movie of schedule) {
    const start = timeToMinutes(movie.startTime);
    const end = start + movie.duration;

    if (currentMinutes >= start && currentMinutes < end) {
      currentMovie = movie;
      seekTo = (currentMinutes - start) * 60; // in seconds
      break;
    }
  }

  if (!currentMovie || !currentMovie.url) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.infoText}>No movie scheduled at this time.</Text>
      </SafeAreaView>
    );
  }

  const handleVideoLoad = () => {
    if (videoRef.current && seekTo > 0) {
      videoRef.current.seek(seekTo); // Call the seek method
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Video
          ref={videoRef} // Assign the ref
          source={{uri: currentMovie.url}}
          style={styles.video}
          controls
          paused={false}
          resizeMode="contain"
          repeat={true} // Seek when video loads
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  video: {flex: 1},
  viewbox: {
    backgroundColor: '#000000',
    height: hp('45%'),
    width: wp('95%'),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
  },
  errorText: {color: 'red', fontSize: 16},
  infoText: {fontSize: 16},
});

export default App;
