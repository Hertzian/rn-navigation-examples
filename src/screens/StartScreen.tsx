import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const StartScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Start Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
