import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
//import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page1</Text>
      <Button
        title="go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navigate with arguments
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.btnBigText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: 'violet'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.btnBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};