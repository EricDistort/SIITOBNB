/* eslint-disable @typescript-eslint/no-unused-vars */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../src/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Touch() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Details')}>
        <Text>Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    position: 'absolute',
    bottom: -2,
    flex: 1,
    height: 80,
    right: 0,
    left: 0,
    flexDirection: 'row',
  backgroundColor: 'grey'
  },

  touch: {
    height: 50,
    backgroundColor: '#FFFFFF',
    width: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
