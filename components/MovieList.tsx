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
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          {contacts.map(({uid, name, cast, time, poster}) => (
            <View key={uid} style={styles.contacts}>
              <Image source={{uri: poster}} style={styles.poster} />
              <View style={styles.nameplate}>
                <Text style={styles.moviename}>{name}</Text>
                <Text style={styles.cast}>{cast}</Text>
              </View>
              <View style={styles.timebar}>
                <Text style={styles.time}>{time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    height: verticalScale(220),
    width: '100%',
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: 'grey',
  },
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
  cast: {},
  main: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: verticalScale(200),
    padding: 20
    
    //marginBottom: moderateScale(40),
  },
  time: {
    fontSize: moderateScale(14),
  },
  timebar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
