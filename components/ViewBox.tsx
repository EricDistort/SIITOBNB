import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const scheduleUrl =
  'https://github.com/EricDistort/raw/blob/main/schedule.json';

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

const App = () => {
  const [schedule, setSchedule] = useState<any[]>(null);

  useEffect(() => {
    fetch(scheduleUrl)
      .then(res => res.json())
      .then(data => setSchedule(data))
      .catch(console.error);
  }, []);

  if (!schedule) return <ActivityIndicator style={{flex: 1}} size="large" />;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let currentMovie = null;
  let seekTo = 0;

  for (const movie of schedule) {
    const start = timeToMinutes(movie.startTime);
    const end = start + movie.duration;

    if (currentMinutes >= start && currentMinutes < end) {
      currentMovie = movie;
      seekTo = (currentMinutes - start) * 60;
      break;
    }
  }

  if (!currentMovie)
    return <ActivityIndicator style={{flex: 1}} size="large" />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Video
          source={{uri: currentMovie.url}}
          style={styles.video}
          controls
          paused={false}
          seek={seekTo}
          resizeMode="contain"
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
    height: hp('45%'),
    width: wp('95%'),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default App;
