import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const scheduleUrl =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

// Updated to use seconds
function timeToSeconds(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes) * 60;
}

const App = () => {
  const [schedule, setSchedule] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<Video>(null);
  const [seekTo, setSeekTo] = useState<number>(0);
  const [currentMovie, setCurrentMovie] = useState<any>(null);
  const [paused, setPaused] = useState<boolean>(true);
  const lastMovieUrl = useRef<string | null>(null);

  // Fetch schedule every 10 seconds
  useEffect(() => {
    const fetchSchedule = () => {
      fetch(scheduleUrl)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (Array.isArray(data)) setSchedule(data);
          else throw new Error('Invalid schedule format');
        })
        .catch(err => {
          console.error(err);
          setError(err.message);
        });
    };

    fetchSchedule();
    const intervalId = setInterval(fetchSchedule, 10000);
    return () => clearInterval(intervalId);
  }, []);

  // Check current movie every second with second-precision logic
  useEffect(() => {
    if (!schedule) return;

    const checkCurrentMovie = () => {
      const now = new Date();
      const currentSeconds =
        now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      let foundMovie = null;
      let calculatedSeekTo = 0;

      for (const movie of schedule) {
        const start = timeToSeconds(movie.startTime);
        const end = start + movie.duration * 60;
        if (currentSeconds >= start && currentSeconds < end) {
          foundMovie = movie;
          calculatedSeekTo = currentSeconds - start;
          break;
        }
      }

      if ((foundMovie?.url || null) !== lastMovieUrl.current) {
        setCurrentMovie(foundMovie);
        setSeekTo(calculatedSeekTo);
        setPaused(foundMovie ? false : true);
        lastMovieUrl.current = foundMovie?.url || null;
      }
    };

    checkCurrentMovie();
    const timerId = setInterval(checkCurrentMovie, 1000);
    return () => clearInterval(timerId);
  }, [schedule]);

  // Seek to correct time when movie or seekTo updates
  useEffect(() => {
    if (videoRef.current && seekTo > 0) {
      videoRef.current.seek(seekTo);
    }
  }, [seekTo, currentMovie]);

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <LottieView
          source={require('../media/loading.json')}
          autoPlay
          loop
          style={styles.video}
        />
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        {currentMovie?.url ? (
          <Video
            ref={videoRef}
            source={{uri: currentMovie.url}}
            style={styles.video}
            controls
            paused={paused}
            resizeMode="contain"
            repeat
          />
        ) : (
          <LottieView
            source={require('../media/loading.json')}
            autoPlay
            loop
            style={styles.video}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  video: {flex: 1},
  viewbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    height: hp('45%'),
    width: wp('95%'),
    borderRadius: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default App;
