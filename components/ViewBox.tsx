import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  AppState,
  AppStateStatus,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const scheduleUrl =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

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
  const [shouldSeek, setShouldSeek] = useState(false);

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
        setShouldSeek(true);
        lastMovieUrl.current = foundMovie?.url || null;
      }
    };

    checkCurrentMovie();
    const timerId = setInterval(checkCurrentMovie, 1000);
    return () => clearInterval(timerId);
  }, [schedule]);

  // Handle app state changes to resync video position
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && currentMovie) {
        // Recalculate seekTo based on current time
        const now = new Date();
        const currentSeconds =
          now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const start = timeToSeconds(currentMovie.startTime);
        const newSeekTo = currentSeconds - start;
        setSeekTo(newSeekTo > 0 ? newSeekTo : 0);

        // Directly seek the video if loaded
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

  // Fullscreen handler
  const handleFullscreen = () => {
    if (videoRef.current) {
      // iOS
      if (videoRef.current.presentFullscreenPlayer) {
        videoRef.current.presentFullscreenPlayer();
      }
      // Android/TV
      if (videoRef.current.presentFullscreen) {
        videoRef.current.presentFullscreen();
      }
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
              style={styles.fullscreenButton}
              onPress={handleFullscreen}
              activeOpacity={0.7}
              focusable={true}
              hasTVPreferredFocus={true} // TV: this button will be focused first
            >
              <Image
                source={require('../media/fullscreen.png')}
                style={styles.fullscreenIcon}
                resizeMode="contain"
              />
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
  fullscreenIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
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
    backgroundColor: 'rgb(0, 0, 0)',
    height: verticalScale(300),
    width: '100%',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    margin: moderateScale(20),
    overflow: 'hidden',
    position: 'relative',
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: moderateScale(6),
    right: moderateScale(6),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: moderateScale(10),
    padding: moderateScale(2),
    zIndex: 10,
  },
});

export default App;
