import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ContactsScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../media/homeicon.png')} // Update the path accordingly
              style={{
                width: 24,
                height: 24,
                tintColor: focused
                  ? 'rgb(255, 196, 0)'
                  : 'rgba(253, 253, 253, 0.49)', // Change color when active
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../media/contacticon.png')} // Update the path accordingly
              style={{
                width: 24,
                height: 24,
                tintColor: focused
                  ? 'rgb(255, 196, 0)'
                  : 'rgba(253, 253, 253, 0.49)', // Change color when active
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../media/profileicon.png')} // Update the path accordingly
              style={{
                width: 24,
                height: 24,
                tintColor: focused
                  ? 'rgb(255, 196, 0)'
                  : 'rgba(253, 253, 253, 0.49)', // Change color when active
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
  },
});

export default App;
