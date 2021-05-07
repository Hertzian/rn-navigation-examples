import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab1Screen effect');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  );
};
