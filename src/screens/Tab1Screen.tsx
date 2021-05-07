import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 20}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="bluetooth-outline" size={80} color={colors.primary} />
        <Icon name="wifi-outline" size={80} color={colors.primary} />
        <Icon name="aperture-outline" size={80} color={colors.primary} />
        <Icon name="finger-print-outline" size={80} color={colors.primary} />
        <Icon name="rocket-outline" size={80} color={colors.primary} />
        <Icon name="at-outline" size={80} color={colors.primary} />
        <Icon name="beer-outline" size={80} color={colors.primary} />
        <Icon name="battery-dead-outline" size={80} color={colors.primary} />
        <Icon name="battery-half-outline" size={80} color={colors.primary} />
        <Icon name="battery-full-outline" size={80} color={colors.primary} />
        <Icon
          name="battery-charging-outline"
          size={80}
          color={colors.primary}
        />
        <Icon name="close-outline" size={80} color={colors.primary} />
        <Icon name="skull-outline" size={80} color={colors.primary} />
        <Icon name="lock-closed-outline" size={80} color={colors.primary} />
        <Icon name="planet-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};
