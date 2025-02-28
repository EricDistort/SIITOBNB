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
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View style={styles.touch}>
          <Text>Touch</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  touch: {
    height: 200,
    backgroundColor: '#FFFFFF',
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
