import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/Navigator/AuthNavigator'
import navigationTheme from './app/Navigator/navigationTheme'
import AppNavigator from './app/Navigator/AppNavigator'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  )
}
