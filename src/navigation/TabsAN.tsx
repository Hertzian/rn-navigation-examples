import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {Text} from 'react-native';
import {colors} from '../theme/appTheme';
import {TopTabNav} from './TopTabNav';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

export const TabsAN = () => {
  return (
    <Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
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
        options={{title: 'TopTab'}}
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
