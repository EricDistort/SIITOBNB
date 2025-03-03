import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

// Define screens

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationIndependentTree>
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
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationIndependentTree>
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
