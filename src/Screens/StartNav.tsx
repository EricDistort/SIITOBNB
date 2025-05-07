import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image, Text} from 'react-native';
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
    backgroundColor: '#fff',
    borderRadius: 15,
    alignSelf: 'center',
    overflow: 'hidden',

    marginHorizontal: 30,
  },
});

export default App;
