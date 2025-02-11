import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Linking,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

const TouchAnimation = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 2.5, // Shrink
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Return to normal size
      useNativeDriver: true,
    }).start();
  };

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => openWebsite('https://siitobnb.com/wallet')}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        //onPress={() => alert('Pressed!')}
      >
        <Animated.View
          style={[styles.button, {transform: [{scale: scaleValue}]}]}>
          <View>
            <LottieView
              style={styles.homeAnimationz}
              source={require('../media/homeNavigate.json')}
              autoPlay
              loop
            />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    //resizeMode: 'contain',
    //backgroundColor: 'yellow',
    borderRadius: 5,
    margin: 5,
    //overflow: 'hidden',
  },
  button: {
    height: 50,
    width: 50,
  },

  homeAnimationz: {
    height: 50,
    width: 50,
  },
});

export default TouchAnimation;
