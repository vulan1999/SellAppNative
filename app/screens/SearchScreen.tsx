import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppInput from '../components/AppInput'
import Screen from '../components/Screen'
import AppPicker from '../components/AppPicker'

const SearchScreen = () => {
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppInput placeholder="Enter input" icon="email" />
    </Screen>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
