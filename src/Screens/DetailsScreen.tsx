import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}></TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.logo}
          source={require('../../media/logo.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    flex: 1,
  },

  container: {
    backgroundColor: 'transparent',
    borderWidth: 0.2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    height: 20,
    width: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    left: 0,
  },

  logo: {
    height: 30,
    width: 100,
    alignSelf: 'center',
  },
});

export default DetailsScreen;
