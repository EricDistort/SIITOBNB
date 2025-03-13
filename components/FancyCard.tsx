import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import LottieView from 'lottie-react-native';

export default function FancyCard() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.slider}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../media/image1.jpg')}
              />
              <Text style={styles.name}>Juliana Fernandez</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../media/image2.jpg')}
              />
              <Text style={styles.name}>Lucy Jade</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <LottieView
                style={styles.image}
                source={require('../media/trial.json')}
                autoPlay
                loop
              />
              <Text style={styles.name}>Eliana Bridd</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../media/image4.jpg')}
              />
              <Text style={styles.name}>Alissa Larson</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../media/image5.jpg')}
              />
              <Text style={styles.name}>Lily Montana</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require('../media/image5.jpg')}
              />
              <Text style={styles.name}>Lily Montana</Text>
              <Text style={styles.designation}>Fashion Model</Text>
              <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quaerat ullam saepe unde nesciunt commodi
                officiis hic. Quam, provident nobis?
              </Text>
              <Text style={styles.date}>06 Jan, 2024</Text>
              <TouchableOpacity style={styles.heartButton} onPress={onPress}>
                <Image
                  style={styles.heart}
                  source={require('../media/heart.png')}
                />
                <Text style={styles.counter}>{count}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slider: {
    //flexDirection: 'row',
  },
  title: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  card: {
    padding: 10,
    margin: 20,
    //alignItems: 'center',
    backgroundColor: '#f8edfc',
    overflow: 'hidden',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 320,
  },

  image: {
    height: 350,
    width: 300,
    borderRadius: 15,
  },

  name: {
    //color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 3,
  },

  designation: {
    color: '#5b3585',
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    backgroundColor: '#5b3585',
    borderRadius: 5,
  },

  bio: {
    //color: 'white',
    marginLeft: 5,
  },

  date: {
    //color: 'white',
    marginLeft: 5,
    marginTop: 15,
  },

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

  heart: {},

  counter: {
    paddingLeft: 1,
    paddingBottom: 1,
  },
});
