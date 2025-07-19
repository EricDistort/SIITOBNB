import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DATA_URL =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

const {height} = Dimensions.get('window');

export default function ContactList() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const isTV = Platform.isTV;

  const fetchData = async () => {
    try {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      const today = new Date()
        .toLocaleDateString('en-US', {weekday: 'long'})
        .toLowerCase();
      setContacts(data[today] || []);
    } catch (error) {
      console.error('Failed to fetch movie data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.scrollContainer}>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: verticalScale(10)}}>
          {contacts.map(({id, name, cast, time, poster}) => (
            <TouchableOpacity
              key={id}
              style={[
                styles.contacts,
                isTV && focusedId === id && styles.focusedContact,
              ]}
              focusable={isTV}
              hasTVPreferredFocus={isTV && id === 1}
              activeOpacity={0.8}
              onFocus={() => setFocusedId(id)}
              onBlur={() => setFocusedId(null)}
              onPress={() => {}}>
              <Image source={{uri: poster}} style={styles.poster} />
              <View style={styles.nameplate}>
                <Text style={styles.moviename}>{String(name || '')}</Text>
                <Text style={styles.cast}>{String(cast || '')}</Text>
              </View>
              <View style={styles.timebar}>
                <Text style={styles.time}>{String(time || '')}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: moderateScale(10),
    width: '100%',
  },
  scrollContainer: {
    height: verticalScale(286), // Takes 80% of screen height
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(20, 20, 20, 0)',
    overflow: 'hidden',
  },
  contacts: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    margin: moderateScale(5),
    backgroundColor: 'rgba(39, 39, 39, 0.66)',
    borderRadius: moderateScale(10),
    borderWidth: 0,
    borderColor: 'transparent',
  },
  focusedContact: {
    borderWidth: 3,
    borderColor: '#00ffff',
  },
  poster: {
    width: scale(60),
    height: verticalScale(30),
    borderRadius: moderateScale(5),
    resizeMode: 'cover',
    overflow: 'hidden',
    borderWidth: moderateScale(1),
    borderColor: 'rgba(255, 255, 255, 0.57)',
  },
  nameplate: {
    marginLeft: moderateScale(10),
    flex: 1,
  },
  moviename: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  cast: {
    fontSize: moderateScale(10),
    color: 'rgba(255, 255, 255, 0.51)',
    marginTop: verticalScale(1),
  },
  time: {
    fontSize: moderateScale(14),
    color: 'rgb(250, 250, 250)',
  },
  timebar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: moderateScale(8),
  },
});
