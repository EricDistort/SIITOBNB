import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import musicScreen from './musicScreen';

// Define screens

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
  
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          
          tabBarStyle: {
            backgroundColor: 'black',
            paddingBottom: 5,
            height: 60,
          },
        })}>
        <Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerShown: false,
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../media/homeicon.png')} // Update the path accordingly
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? 'rgb(255, 196, 0)' : 'rgba(253, 253, 253, 0.49)', // Change color when active
        }}
      />
    ),
  }}
/>
        <Tab.Screen
          name="Profile"
          component={DetailsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../media/contacticon.png')} // Update the path accordingly
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'rgb(255, 196, 0)' : 'rgba(253, 253, 253, 0.49)', // Change color when active
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={musicScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../media/profileicon.png')} // Update the path accordingly
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'rgb(255, 196, 0)' : 'rgba(253, 253, 253, 0.49)', // Change color when active
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
