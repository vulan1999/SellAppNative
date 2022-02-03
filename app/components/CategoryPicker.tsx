import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

interface itemProps {
  label: string
  color?: string
  icon?: any
}

interface Props {
  item: itemProps
  // onPress: any
}

const CategoryPicker = ({ item }: Props) => {
  return (
    <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
      <Icon backgroundColor={item.color} name={item.icon} iconSize={80} />
      <AppText>{item.label}</AppText>
    </View>
  )
}

export default CategoryPicker
