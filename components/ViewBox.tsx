import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  AppState,
  AppStateStatus,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
// Add this import for vector icons
import Icon from 'react-native-vector-icons/MaterialIcons';

const scheduleUrl =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

function timeToSeconds(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes) * 60;
}

const App = () => {
  const [schedule, setSchedule] = useState<Record<string, any[]> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<Video>(null);
  const [seekTo, setSeekTo] = useState<number>(0);
  const [currentMovie, setCurrentMovie] = useState<any>(null);
  const [paused, setPaused] = useState<boolean>(true);
  const lastMovieUrl = useRef<string | null>(null);
  const [shouldSeek, setShouldSeek] = useState(false);
  const [isFullscreenFocused, setIsFullscreenFocused] = useState(false);
  const isTV = Platform.isTV;

  useEffect(() => {
    const fetchSchedule = () => {
      fetch(scheduleUrl)
        .then(res => res.json())
        .then(data => setSchedule(data))
        .catch(err => {
          console.error(err);
          setError(err.message);
        });
    };

    fetchSchedule();
    const intervalId = setInterval(fetchSchedule, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!schedule) return;

    const checkCurrentMovie = () => {
      const now = new Date();
      const day = now
        .toLocaleDateString('en-US', {weekday: 'long'})
        .toLowerCase();
      const todaySchedule = schedule[day] || [];

      const currentSeconds =
        now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      let foundMovie = null;
      let calculatedSeekTo = 0;

      for (const movie of todaySchedule) {
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
        setPaused(!foundMovie);
        setShouldSeek(true);
        lastMovieUrl.current = foundMovie?.url || null;
      }
    };

    checkCurrentMovie();
    const timerId = setInterval(checkCurrentMovie, 1000);
    return () => clearInterval(timerId);
  }, [schedule]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && currentMovie) {
        const now = new Date();
        const currentSeconds =
          now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const start = timeToSeconds(currentMovie.startTime);
        const newSeekTo = currentSeconds - start;
        setSeekTo(newSeekTo > 0 ? newSeekTo : 0);
        if (videoRef.current && newSeekTo > 0) {
          videoRef.current.seek(newSeekTo);
        }
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => subscription.remove();
  }, [currentMovie]);

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer?.();
      videoRef.current.presentFullscreen?.();
    }
  };

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
          <>
            <Video
              ref={videoRef}
              source={{uri: currentMovie.url}}
              style={styles.video}
              controls={false}
              paused={paused}
              resizeMode="contain"
              onLoad={() => {
                if (shouldSeek && seekTo > 0 && videoRef.current) {
                  videoRef.current.seek(seekTo);
                  setShouldSeek(false);
                }
              }}
            />
            <TouchableOpacity
              style={[
                styles.fullscreenButton,
                isTV && isFullscreenFocused && styles.focusedButton,
              ]}
              onPress={handleFullscreen}
              activeOpacity={0.7}
              focusable={isTV}
              hasTVPreferredFocus={isTV}
              onFocus={() => setIsFullscreenFocused(true)}
              onBlur={() => setIsFullscreenFocused(false)}
              accessible
              accessibilityLabel="Fullscreen">
              <Icon name="fullscreen" size={28} color="#fff" />
            </TouchableOpacity>
          </>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
  },
  video: {
    flex: 1,
  },
  viewbox: {
    backgroundColor: 'black',
    height: verticalScale(250),
    width: '100%',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    margin: moderateScale(20),
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 3,
    borderColor: 'rgba(66,66,66,0.29)',
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: moderateScale(1),
    right: moderateScale(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: moderateScale(50),
    padding: moderateScale(8),
    zIndex: 10,
  },
  focusedButton: {
    borderWidth: 3,
    borderColor: '#00ffff',
  },
});

export default App;
