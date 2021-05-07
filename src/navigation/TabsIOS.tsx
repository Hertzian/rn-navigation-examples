import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
//import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';
import {TopTabNav} from './TopTabNav';

const {Navigator, Screen} = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <Navigator
      //sceneContainerStyle={{
      //backgroundColor: 'white',
      //}}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          //borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({
          color,
          //focused,
          //size
        }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'magnet';
              break;

            case 'Tab2Screen':
              iconName = 'stopwatch';
              break;

            case 'StackNavigator':
              iconName = 'file-tray-stacked';
              break;
          }

          return (
            //<Text style={{color}}>
            <Icon name={`${iconName}-outline`} size={25} color={'white'} />
            //</Text>
          );
        },
      })}>
      <Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          //tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNav}
      />
      <Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Navigator>
  );
};
