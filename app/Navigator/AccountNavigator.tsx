import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import MessagesScreen from '../screens/MessagesScreen'
import MyAccountScreen from '../screens/MyAccountScreen'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator
