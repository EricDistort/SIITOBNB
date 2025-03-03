import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}></TouchableOpacity>
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
    padding: 100,
    overflow: 'hidden',
  },

  container: {
    //borderWidth: 0.2,
    //borderColor: '#FFFFFF',
    //flex: 1,
    backgroundColor: 'grey',
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  button: {
    height: 50,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 50,
  },
});
