import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigator'

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

//interface RouterParams {
//id: number;
//name: string;
//}

export const PersonScreen = ({ route, navigation }: Props) => {
  //const params = route.params as RouterParams;
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}
