import 'react-native-gesture-handler';
import React from 'react';
//import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {StackNavigator} from './src/navigation/StackNavigator';
//import {BasicDrawer} from './src/navigation/BasicDrawer';
import {ComplexDrawer} from './src/navigation/ComplexDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <ComplexDrawer />
    </NavigationContainer>
  );
};

export default App;
