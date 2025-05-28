import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../src/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

//import {SafeAreaView} from 'react-native-safe-area-context';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'October',
      cast: 'Varun Dhawan, Kriti Sanon',
      time: '9.15 PM',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          {contacts.map(({uid, name, cast, time}) => (
            <View key={uid} style={styles.contacts}>
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
  button: {
    height: verticalScale(40),
    width: scale(250),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgb(255, 174, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: moderateScale(10),
    backgroundColor: '#dceafa',
    overflow: 'scroll',
    height: verticalScale(120),
    width: scale(300),
    borderRadius: moderateScale(20),
  },
  contacts: {
    flexDirection: 'row',
    padding: moderateScale(10),
    margin: moderateScale(5),
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: moderateScale(10),
  },
  contactImage: {
    height: scale(50),
    width: scale(50),
    borderRadius: moderateScale(25),
  },
  nameplate: {
    marginLeft: moderateScale(10),
  },
  moviename: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  cast: {},
  continuetitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  main: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: verticalScale(200),
    marginBottom: moderateScale(40),
  },
  time: {
    fontSize: moderateScale(14),
    fontWeight: 'normal',
  },
  timebar: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});
