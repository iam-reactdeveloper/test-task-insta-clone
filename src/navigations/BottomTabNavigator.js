/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './HomeNavigator';
import Search from '../screens/Search/Search';
import CreatePost from '../screens/CreatePost/CreatePost';
import Profile from '../screens/Profile/Profile';
import {colors} from '../utils/colors';
import Reels from '../screens/Reels/Reals';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        if (route.name === 'Home') {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Reels') {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.black,
      inactiveTintColor: colors.grey,
      showLabel: false,
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Discovery" component={Search} />
    <Tab.Screen name="Post" component={CreatePost} />
    <Tab.Screen name="Reels" component={Reels} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomHomeNavigator;
