import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props {
  name?: any
  iconColor?: string
  iconSize?: number
  backgroundColor?: string
}

const Icon = ({
  name = 'email',
  iconColor = 'white',
  iconSize = 50,
  backgroundColor = '#000',
}: Props) => {
  return (
    <View
      style={{
        width: iconSize * 1.5,
        height: iconSize * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: backgroundColor,
      }}
    >
      <MaterialCommunityIcons size={iconSize} name={name} color={iconColor} />
    </View>
  )
}

export default Icon
