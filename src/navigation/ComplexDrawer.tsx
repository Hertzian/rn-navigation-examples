import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colors} from '../theme/appTheme';
import {Tabs} from './Tabs';
//import {createStackNavigator} from '@react-navigation/stack';

//this is a generic
const Drawer = createDrawerNavigator();

//const Stack = createStackNavigator();
//const SettingsStackScreen = () => {
//return (
//<Stack.Navigator>
//<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
//</Stack.Navigator>
//);
//};

export const ComplexDrawer = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 600 ? 'permanent' : 'front'}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      {/*<Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} />*/}
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuItem}>
            <Icon name="compass-outline" size={30} color={colors.primary} />{' '}
            Navigation stack
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuItem}>
            <Icon name="settings-outline" size={30} color={colors.primary} />{' '}
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
