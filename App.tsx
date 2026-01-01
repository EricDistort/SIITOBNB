import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import {moderateScale, s, vs, ms} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');
const DATA_URL =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

const timeToSeconds = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes) * 60;
};

export default function App() {
  const [schedule, setSchedule] = useState<any>(null);
  const [todayMovies, setTodayMovies] = useState<any[]>([]);
  const [currentMovie, setCurrentMovie] = useState<any>(null);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const [seekTo, setSeekTo] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<Video>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const isTV = Platform.isTV;

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowControls(true);
    timerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showControls ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [showControls]);

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => {
        const day = new Date()
          .toLocaleDateString('en-US', {weekday: 'long'})
          .toLowerCase();
        setSchedule(data);
        setTodayMovies(data[day] || []);
      })
      .catch(console.error);

    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!schedule) return;
    const interval = setInterval(() => {
      const now = new Date();
      const curSec =
        now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      const found = todayMovies.find(m => {
        const start = timeToSeconds(m.startTime || m.time);
        return curSec >= start && curSec < start + (m.duration || 120) * 60;
      });

      if (found && found.url !== currentMovie?.url) {
        setCurrentMovie(found);
        setSeekTo(curSec - timeToSeconds(found.startTime || found.time));
        startTimer();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [schedule, todayMovies, currentMovie]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <TouchableWithoutFeedback onPress={startTimer}>
        <View style={styles.theaterContainer}>
          {currentMovie ? (
            <Video
              ref={videoRef}
              source={{uri: currentMovie.url}}
              style={styles.videoStyle}
              resizeMode="cover"
              onLoad={() => videoRef.current?.seek(seekTo)}
            />
          ) : (
            <LottieView
              source={require('./media/loading.json')}
              autoPlay
              loop
              style={styles.lottieStyle}
            />
          )}

          <Animated.View
            pointerEvents="none"
            style={[styles.glowOverlay, {opacity: fadeAnim}]}
          />

          {showControls && (
            <View style={styles.infoFloating}>
              <View style={styles.liveIndicator}>
                <View style={styles.redDot} />
                <Text style={styles.liveText}>STREAMING NOW</Text>
              </View>
              <Text style={styles.mainTitle}>
                {currentMovie?.name || 'Show Ended'}
              </Text>
              <Text style={styles.castSmall}>
                {currentMovie?.cast || 'Check schedule below for next show'}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>

      <SafeAreaView style={styles.gridSection}>
        <Text style={styles.gridHeading}>UPCOMING SHOWS</Text>

        <ScrollView
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}>
          {todayMovies.map(item => {
            const isPlaying = currentMovie?.id === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                onFocus={() => {
                  setFocusedId(item.id);
                  startTimer();
                }}
                onBlur={() => setFocusedId(null)}
                style={[
                  styles.tile,
                  isTV && focusedId === item.id && styles.tileFocused,
                  isPlaying && styles.tileActive,
                ]}
                activeOpacity={0.9}>
                <Image source={{uri: item.poster}} style={styles.tilePoster} />
                <View style={styles.tileContent}>
                  <Text style={styles.tileTime}>{item.time}</Text>
                  <Text style={styles.tileName} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                {isPlaying && <View style={styles.playingBar} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  theaterContainer: {
    width: '100%',
    height: vs(320),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  lottieStyle: {
    width: s(250),
    height: s(250),
  },
  glowOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  infoFloating: {
    position: 'absolute',
    bottom: vs(25),
    left: s(20),
    right: s(20),
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,215,0,0.15)',
    paddingHorizontal: s(10),
    paddingVertical: vs(4),
    borderRadius: ms(20),
    alignSelf: 'flex-start',
    marginBottom: vs(10),
    borderWidth: ms(1),
    borderColor: '#FFD700',
  },
  redDot: {
    width: ms(6),
    height: ms(6),
    borderRadius: ms(3),
    backgroundColor: '#FFD700',
    marginRight: s(8),
  },
  liveText: {
    color: '#FFD700',
    fontSize: ms(9),
    fontWeight: '900',
    letterSpacing: ms(1),
  },
  mainTitle: {
    color: '#FFF',
    fontSize: ms(24),
    fontWeight: 'bold',
  },
  castSmall: {
    color: '#AAA',
    fontSize: ms(13),
    marginTop: vs(4),
  },
  gridSection: {
    flex: 1,
    paddingTop: vs(20),
  },
  gridHeading: {
    color: '#444',
    fontSize: ms(11),
    fontWeight: '900',
    marginLeft: s(20),
    marginBottom: vs(15),
    letterSpacing: ms(3),
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: s(10),
    justifyContent: 'space-between',
    paddingBottom: vs(40),
  },
  tile: {
    width: s(160),
    height: vs(120),
    backgroundColor: '#111',
    borderRadius: ms(15),
    marginBottom: vs(10),
    overflow: 'hidden',
    borderWidth: ms(1.5),
    borderColor: '#111',
  },
  tileFocused: {
    borderColor: '#FFD700',
    transform: [{scale: 1.05}],
  },
  tileActive: {
    backgroundColor: '#1A1600',
    borderColor: '#FFD700',
  },
  tilePoster: {
    width: '100%',
    height: '60%',
    opacity: 1,
  },
  tileContent: {
    padding: ms(10),
  },
  tileTime: {
    color: '#FFD700',
    fontSize: ms(10),
    fontWeight: '800',
  },
  tileName: {
    color: '#FFF',
    fontSize: ms(12),
    marginTop: vs(2),
    fontWeight: '500',
  },
  playingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: vs(3),
    backgroundColor: '#FFD700',
  },
});
