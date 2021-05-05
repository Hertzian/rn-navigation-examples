import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page3</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
