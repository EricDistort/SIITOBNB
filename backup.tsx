
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image, ScrollView, useColorScheme} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function App() {

  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <LinearGradient
          colors={['#04b2d1', '#c704d1']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>CODE X</Text>
        </LinearGradient>
      </View>

      <LinearGradient
          colors={['#04b2d1', '#c704d1']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradients}>
        </LinearGradient>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>

        <View style={styles.card}>
        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballone}>
          <Text style={styles.buttonText}>01</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.balltwo}>
          <Text style={styles.buttonText}>02</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballthree}>
          <Text style={styles.buttonText}>03</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballfour}>
          <Text style={styles.buttonText}>04</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballfive}>
          <Text style={styles.buttonText}>05</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballsix}>
          <Text style={styles.buttonText}>06</Text>
        </LinearGradient>
        
        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballsix}>
          <Text style={styles.buttonText}>07</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballsix}>
          <Text style={styles.buttonText}>08</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballsix}>
          <Text style={styles.buttonText}>09</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#000000', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.ballsix}>
          <Text style={styles.buttonText}>10</Text>
        </LinearGradient>
        </View>
        </ScrollView>
        <View style={styles.image}>
                    <Image style={styles.images}source={require('./media/image1.jpg')} />
                    </View>
            
                    <View style={styles.nameplate}>
                      <Text style={styles.title}>
                        IDEA?
                      </Text>
            
                      <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing``1565UY7`T56` elit. Fugiat voluptatem eaque nobis laborum illo, quia, perspiciatis officiis ex ab aliquam odit maiores quisquam minus non quam provident et quod molestias?
                      </Text>
                    </View>
            
            
                    <View style={styles.image}>
                    <Image style={styles.images}source={require('./media/image2.jpg')} />
                    </View>
            
                    <View style={styles.nameplate}>
                      <Text style={styles.title}>
                        IDEA?
                      </Text>
            
                      <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing``1565UY7`T56` elit. Fugiat voluptatem eaque nobis laborum illo, quia, perspiciatis officiis ex ab aliquam odit maiores quisquam minus non quam provident et quod molestias?
                      </Text>
                    </View>
            
                    <View style={styles.image}>
                    <Image style={styles.images}source={require('./media/image3.jpg')} />
                    </View>
            
                    <View style={styles.nameplate}>
                      <Text style={styles.title}>
                        IDEA?
                      </Text>
            
                      <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing``1565UY7`T56` elit. Fugiat voluptatem eaque nobis laborum illo, quia, perspiciatis officiis ex ab aliquam odit maiores quisquam minus non quam provident et quod molestias?
                      </Text>
                    </View>
            
                    <View style={styles.image}>
                    <Image style={styles.images}source={require('./media/image4.jpg')} />
                    </View>
            
                    <View style={styles.nameplate}>
                      <Text style={styles.title}>
                        IDEA?
                      </Text>
            
                      <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing``1565UY7`T56` elit. Fugiat voluptatem eaque nobis laborum illo, quia, perspiciatis officiis ex ab aliquam odit maiores quisquam minus non quam provident et quod molestias?
                      </Text>
                    </View>
            
                    <View style={styles.imagesFive}>
                    <Image style={styles.images}source={require('./media/image5.jpg')} />
                    </View>
            
                    <View style={styles.nameplate}>
                      <Text style={styles.title}>
                        IDEA?
                      </Text>
            
                      <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing``1565UY7`T56` elit. Fugiat voluptatem eaque nobis laborum illo, quia, perspiciatis officiis ex ab aliquam odit maiores quisquam minus non quam provident et quod molestias?
                      </Text>
                    </View>
      </ScrollView>
      <LinearGradient
          colors={['#ffffff', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.bar}>
          <Text style={styles.bartext}>HOME</Text>
          <Text style={styles.bartext}>TOOL</Text>
          <Text style={styles.bartext}>MENU</Text>
        </LinearGradient>
    </SafeAreaView>
    );
};










const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
    //backgroundColor: '#06d13c',
    height: 30,
    width: 1,
    
  },
  linearGradient: {
    height: 50,
    width: 150,
    paddingLeft: 15,
    paddingRight: 20,
    borderRadius: 50,
    justifyContent: 'center',
    //backgroundColor: '#06d13c',
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  linearGradients: {
    height: 5,
    width: 340,
    borderRadius: 50,
    //backgroundColor: '#06d13c',
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
  },

  card: {
    height: 50,
    width: 580,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //paddingLeft: 15,
    //paddingRight: 20,
    //paddingTop: 0,
    //paddingBottom: 0
  },

  ballone: {
    height: 50,
    width: 50,
    borderRadius: 25,
    //marginTop: 0,
    //marginLeft: 0,
    //marginRight: 10,
  },

  balltwo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    //marginTop: 0,
    //marginLeft: 250,
    //marginRight: 50,
    //marginBottom: 10
  },

  ballthree: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  ballfour: {
    height: 50,
    width: 50,
    borderRadius: 25,
  }, 
  
  ballfive: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  ballsix: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  image: {
    height: 350,
    width: 340,
    borderRadius: 12,
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: 10,
    marginTop: 20,
    paddingBottom: 50

  },

  images: {
    //top: 0,
    height: 400,
    width: 360,

  },

  imagesFive: {
    height: 350,
    width: 340,
    borderRadius: 12,
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: 10,
    marginTop: 20,
    paddingTop: 50,

  },

  nameplate: {
justifyContent: 'flex-start',
paddingLeft: 15,
paddingTop: 10,
paddingRight: 15,
marginBottom: 25

  },

  title:{
fontSize: 30,
fontWeight: 'bold',
  },

  subtitle: {
  
  },

  bar: {
    height: 40,
    width: 250,
    //paddingLeft: 15,
    //paddingRight: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 720,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5, 
  },

  bartext: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: '#000000',
    backgroundColor: 'transparent',
  },
});

export default App;
