import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DATA_URL =
  'https://raw.githubusercontent.com/EricDistort/raw/main/movielist.json';

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
          <View key={id} style={styles.contacts}>
            <Image source={{uri: poster}} style={styles.poster} />
            <View style={styles.nameplate}>
              <Text style={styles.moviename}>{String(name || '')}</Text>
              <Text style={styles.cast}>{String(cast || '')}</Text>
            </View>
            <View style={styles.timebar}>
              <Text style={styles.time}>{String(time || '')}</Text>
            </View>
          </View>
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
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(10),
  },
  poster: {
    width: scale(60),
    height: verticalScale(30),
    borderRadius: moderateScale(5),
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  nameplate: {
    marginLeft: moderateScale(10),
    flex: 1,
  },
  moviename: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  cast: {
    fontSize: moderateScale(12),
    color: '#555',
    marginTop: verticalScale(2),
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
    color: '#888',
  },
  timebar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: moderateScale(8),
  },
});
