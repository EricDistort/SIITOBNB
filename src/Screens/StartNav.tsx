import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import DUNOScreen from './DUNOScreen';
import LogsScreen from './LogsScreen';
import ProfileScreen from './ProfileScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white', // Active tab name is white
        tabBarInactiveTintColor: 'grey', // Inactive tab name is grey
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Logs"
        component={LogsScreen}
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
