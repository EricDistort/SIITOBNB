import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, useWindowDimensions, Platform} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import DUNOScreen from './DUNOScreen';
import ProfileScreen from './ProfileScreen';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height || Platform.isTV;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: [styles.tabBar, isLandscape && {marginHorizontal: 300}],
        tabBarBackground: () => (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
          />
        ),
      }}>
      <Tab.Screen
        name="Duno"
        component={DUNOScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <View style={styles.iconPlaceholder} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <View style={styles.iconPlaceholder} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: verticalScale(20),
    height: verticalScale(40),
    width: scale(300),
    backgroundColor: 'transparent',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    overflow: 'hidden',
    marginHorizontal: scale(25),
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: moderateScale(1),
    height: moderateScale(1),
  },
});

export default App;
