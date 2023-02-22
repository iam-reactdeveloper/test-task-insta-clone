import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';

const LoginNavigator = () => {
  const LoginStack = createStackNavigator();
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
