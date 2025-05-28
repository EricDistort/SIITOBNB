import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

const LogsScreen = () => {
  return (
    <SafeAreaView style={styles.boundingbox}>
      <View>
        <Text>LogsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LogsScreen;

const styles = StyleSheet.create({
  boundingbox: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
  },
});
