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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//import {SafeAreaView} from 'react-native-safe-area-context';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function ContactList() {
  const navigation = useNavigation<NavigationProp>();
  const contacts = [
    {
      uid: 1,
      name: 'Andrew James',
      phone: '+97158987423',
      imageUrl:
        'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw',
    },

    {
      uid: 2,
      name: 'Jason Mamoa',
      phone: '+97158987423',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-OU9SvLHba0VWc2LyIZSTzKaY2t5R7-koA&s',
    },

    {
      uid: 3,
      name: 'Laran David',
      phone: '+97158987423',
      imageUrl:
        'https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/07/21160619/318869478_689273422811789_4690697243876215757_n-819x1024.jpg',
    },

    {
      uid: 4,
      name: 'Lexum Berg',
      phone: '+97158987423',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLH-gsrpMgAtFIvkCh2-_SkytOJNSdMTGQg&s',
    },

    {
      uid: 5,
      name: 'Hannah Stocking',
      phone: '+97157465825',
      imageUrl:
        'https://img.freepik.com/premium-photo/ai-avatar-girl-photo_940072-112.jpg',
    },

    {
      uid: 6,
      name: 'Albert Libbo',
      phone: '+97157465825',
      imageUrl:
        'https://readwrite.com/wp-content/uploads/2024/04/synthesia-900x506.png',
    },

    {
      uid: 7,
      name: 'linda Sarry',
      phone: '+97157465825',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRmGljLHsGHa8Mv6MVKv3BvHwMPHHqNO4XQ&s',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          {contacts.map(({uid, name, phone, imageUrl}) => (
            <View key={uid} style={styles.contacts}>
              <Image style={styles.contactImage} source={{uri: imageUrl}} />
              <View style={styles.nameplate}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.phone}>{phone}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.continuetitle}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: hp('5%'),
    width: wp('90%'),
    borderRadius: hp('3%'),
    backgroundColor: 'rgb(255, 174, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    padding: 10,

    //alignItems: 'center',
    backgroundColor: '#dceafa',
    overflow: 'scroll',
    height: hp('30%'),
    width: wp('90%'),
    borderRadius: hp('3%'),
    //marginBottom: 100,
  },
  contacts: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    //alignItems: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 10,
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  nameplate: {
    marginLeft: 10,
  },

  userName: {
    fontSize: wp('2.8%'),
    fontWeight: 'bold',
  },
  phone: {},

  continuetitle: {
    fontSize: wp('4%'),

    fontWeight: 'bold',
  },

  main: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('50%'),
    marginBottom: 100,
  },
});
