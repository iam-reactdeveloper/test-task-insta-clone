/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home/Home';
import logo from '../assets/logo/logo.png';
import {colors} from '../utils/colors';
import {moderateScale} from '../utils/helper';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <Feather name="camera" size={25} color={colors.black} />
        ),
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={styles.headerImage}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="paper-plane-outline"
            size={25}
            color={colors.darkGrey}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const styles = StyleSheet.create({
  headerImage: {width: moderateScale(135), height: moderateScale(50)},
});

export default HomeRoutes;
