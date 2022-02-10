import React from 'react'
import LottieView from 'lottie-react-native'

interface Props {
  visible: boolean
}

const ActivityIndicator = ({ visible = false }: Props) => {
  if (!visible) return null
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/animation/loading.json')}
    />
  )
}

export default ActivityIndicator
