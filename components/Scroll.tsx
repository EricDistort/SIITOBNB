import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

export default function scroll() {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story1.jpg')}
            />
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story2.jpg')}
            />
          </View>

          <View style={[styles.card, styles.cardThree]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story3.jpg')}
            />
          </View>

          <View style={[styles.card, styles.cardFour]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story4.jpg')}
            />
          </View>

          <View style={[styles.card, styles.cardFive]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story5.jpg')}
            />
          </View>

          <View style={[styles.card, styles.cardSix]}>
            <Image
              style={styles.storyImage}
              source={require('../media/story6.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
  },

  container: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
  },

  cardOne: {
    backgroundColor: 'red',
  },

  cardTwo: {
    backgroundColor: 'green',
  },

  cardThree: {
    backgroundColor: 'yellow',
  },

  cardFour: {
    backgroundColor: 'grey',
  },

  cardFive: {
    backgroundColor: 'blue',
  },

  cardSix: {
    backgroundColor: 'pink',
  },

  card: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 80,
    //resizeMode: 'contain',
    //backgroundColor: 'yellow',
    borderRadius: 5,
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    overflow: 'hidden',
  },

  storyImage: {
    height: 100,
    width: 80,
  },
});
