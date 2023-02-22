import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RootNavigation from './navigations';
import LoginNavigator from './navigations/LoginNavigator';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  const {user} = useSelector(state => state?.loginSlice);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {user ? <RootNavigation /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default App;
