import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DATA_URL =
  'https://raw.githubusercontent.com/EricDistort/raw/main/schedule.json';

export default function ContactList() {
  const [contacts, setContacts] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setContacts(data);
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
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: verticalScale(10)}}>
        {contacts.map(({id, name, cast, time, poster}) => (
          <TouchableOpacity
            key={id}
            style={styles.contacts}
            focusable={true}
            hasTVPreferredFocus={id === 1} // First item gets initial focus on TV
            activeOpacity={0.8}
            onPress={() => {}} // Add your onPress logic if needed
          >
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contacts: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    margin: moderateScale(5),
    backgroundColor: 'rgba(39, 39, 39, 0.66)',
    borderRadius: moderateScale(10),
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
  main: {
    justifyContent: 'space-evenly',
    height: verticalScale(240),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: moderateScale(10),
    width: '100%',
    flex: 1,
    overflow: 'hidden',
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
