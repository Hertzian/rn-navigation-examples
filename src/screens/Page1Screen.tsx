import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Button, TouchableOpacity} from 'react-native';
//import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colors} from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        //<Button title="menu" onPress={() => navigation.toggleDrawer()} />
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.toggleDrawer()}>
          <Text>
            <Icon name={'menu-outline'} size={30} color={colors.primary} />
          </Text>
        </TouchableOpacity>
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

      <TouchableOpacity
        style={styles.touchOpaBtn}
        onPress={() => navigation.navigate('Page2Screen')}>
        <Text style={styles.touchOpaTxt}>
          Go to page 2{' '}
          {/*
              <Icon name={'arrow-forward-circle-outline'} size={30} color="white" />
            */}
        </Text>
      </TouchableOpacity>

      <Icon.Button
        name="logo-facebook"
        backgroundColor="#3b5998"
        onPress={() => navigation.navigate('Page2Screen')}>
        Login with Fuckbook
      </Icon.Button>

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
          <Text style={styles.btnBigText}>
            <Icon name={'male-outline'} size={30} color={'white'} />
            Pedro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: 'violet'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.btnBigText}>
            <Icon name={'female-outline'} size={30} color={'white'} />
            Maria
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
