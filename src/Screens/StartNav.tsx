import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import DUNOScreen from './DUNOScreen';
import SMOScreen from './SMOScreen';
import WEBUIUXScreen from './WEBUIUXScreen';
import BRANDINGScreen from './BRANDINGScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
          />
        ),
      })}>
      <Tab.Screen
        name="Duno"
        component={DUNOScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Branding"
        component={BRANDINGScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="WEB/UI/UX"
        component={WEBUIUXScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />

      <Tab.Screen
        name="SMO"
        component={SMOScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    height: hp('5%'),
    width: wp('90%'),
    backgroundColor: 'transparent', // Make tab bar transparent
    borderRadius: 15,
    alignSelf: 'center',
    overflow: 'hidden',
    marginHorizontal: 30,
    // Remove shadow and border for full transparency
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default App;
