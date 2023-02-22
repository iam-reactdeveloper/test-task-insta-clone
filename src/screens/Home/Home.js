import React from 'react';
import {SafeAreaView} from 'react-native';
import Feed from '../../components/Feed';
import {styles} from './styles';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Feed />
  </SafeAreaView>
);

export default Home;
