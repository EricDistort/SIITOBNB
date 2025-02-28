import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
  },

  container: {
    backgroundColor: 'transparent',
  },

  button: {
    height: 20,
    width: 50,
    backgroundColor: 'green',
  },
});

export default DetailsScreen;
