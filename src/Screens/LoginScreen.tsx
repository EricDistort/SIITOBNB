import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.userinfo}>
          <View style={styles.username}>
            <Text style={styles.usernametitle}>Username</Text>
            <TextInput
              style={styles.usernamebox}
              placeholder="Type here..."
              value={firstText}
              onChangeText={setFirstText}
            />
          </View>
          <View style={styles.password}>
            <Text style={styles.passwordtitle}>Password</Text>
            <TextInput
              style={styles.passwordbox}
              placeholder="Type here..."
              value={secondText}
              onChangeText={setSecondText}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.continuetitle}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(40),
    overflow: 'hidden',
  },

  container: {
    borderWidth: 0.5,
    borderColor: 'rgba(255, 196, 0, 0.99)',
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    height: verticalScale(400),
    width: scale(300),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },

  button: {
    height: verticalScale(50),
    width: scale(250),
    backgroundColor: 'rgb(255, 174, 0)',
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },

  userinfo: {
    justifyContent: 'space-evenly',
    height: verticalScale(150),
    alignItems: 'center',
  },

  username: {
    justifyContent: 'space-evenly',

    height: verticalScale(80),
  },

  usernametitle: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
  },
  usernamebox: {
    width: scale(250),
    height: verticalScale(35),
    borderColor: 'rgb(255, 174, 0)',
    borderWidth: 0.5,
    borderRadius: moderateScale(5),
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  password: {
    justifyContent: 'space-evenly',

    height: verticalScale(80),
  },

  passwordtitle: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
  },
  passwordbox: {
    width: scale(250),
    height: verticalScale(35),
    borderColor: 'rgb(255, 174, 0)',
    borderWidth: 0.5,
    borderRadius: moderateScale(5),
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  continuetitle: {
    fontSize: moderateScale(18),

    fontWeight: 'bold',
  },
});
