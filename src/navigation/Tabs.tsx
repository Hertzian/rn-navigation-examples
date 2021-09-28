import React from 'react'
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {StackNavigator} from './StackNavigator';
//import {colors} from '../theme/appTheme';
import { Platform } from 'react-native'

import { TabsIOS } from './TabsIOS'
import { TabsAN } from './TabsAN'

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAN />
}
