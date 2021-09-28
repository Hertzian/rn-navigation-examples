import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
//import {useNavigation} from '@react-navigation/native';

export const Page2Screen = () => {
  //const navigator = useNavigation();

  //useEffect(() => {
  //navigator.setOptions({
  //title: 'Hello cabrown',
  //headerBackTitle: '',
  //});
  //}, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page2</Text>
    </View>
  )
}
//<Button title="Back" onPress={() => navigator.goBack()} />
//<Button
//title="go to page 3"
//onPress={() => navigator.navigate('Page3Screen')}
///>
