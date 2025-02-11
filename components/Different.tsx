import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useState} from 'react';

export default function Different() {

    const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    heartButton: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-evenly',
        //backgroundColor: 'grey',
        alignSelf: 'flex-end',
        width: 50,
        //height: 50,
        alignItems: 'center',
      },
    

      counter: {
        paddingLeft: 1,
        paddingBottom: 1,
      },
      heart: {},
})