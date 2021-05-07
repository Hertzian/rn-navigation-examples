import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

//to remove warnings...
//import {LogBox} from 'react-native';
//LogBox.ignoreLogs('Sending');

const {Navigator, Screen} = createMaterialTopTabNavigator();

export const TopTabNav = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Navigator
      style={{
        paddingTop: top,
      }}
      //sceneContainerStyle={{
      //backgroundColor: 'white',
      //}}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {backgroundColor: colors.primary},
        style: {elevation: 0, shadowColor: 'transparent'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({
          color,
          //focused,
        }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;

            case 'ContactsScreen':
              iconName = 'Co';
              break;

            case 'AlbumsScreen':
              iconName = 'Al';
              break;
          }

          return <Text style={{color: colors.primary}}>{iconName}</Text>;
        },
      })}>
      <Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <Screen
        name="AlbumsScreen"
        options={{title: 'Albums'}}
        component={AlbumsScreen}
      />
    </Navigator>
  );
};
