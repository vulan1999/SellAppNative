import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/Navigator/AuthNavigator'
import navigationTheme from './app/Navigator/navigationTheme'
import AppNavigator from './app/Navigator/AppNavigator'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import jwtDecode from 'jwt-decode'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [user, setUser] = useState()
  const [appReady, setAppReady] = useState(false)

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    setUser(jwtDecode(token))
  }

  if (!appReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setAppReady(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
