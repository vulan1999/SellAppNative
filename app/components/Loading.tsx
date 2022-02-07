import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

interface Props {
  visible: boolean
}

const Loading = ({ visible = false }: Props) => {
  if (!visible) return null
  return (
    <LottieView
      source={require('../../assets/animation/loading.json')}
      autoPlay
      loop
    />
  )
}

export default Loading
