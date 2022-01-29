import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

interface Props {
  children: React.ReactNode
  style?: {}
}

const Screen = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view]}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
})
