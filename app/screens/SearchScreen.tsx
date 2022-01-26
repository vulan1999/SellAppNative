import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../components/AppInput'
import Screen from '../components/Screen'
import AppPicker from '../components/AppPicker'

export type Category = {
  label: string
  value: number
}

const SearchScreen = () => {
  const categories: Category[] = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Gaming Gears', value: 3 },
  ]

  const [category, setCategory] = useState('')

  return (
    <Screen style={styles.screen}>
      <AppPicker
        placeholder="Category"
        icon="apps"
        items={categories}
        category={category}
        setCategory={setCategory}
      />
      <AppInput placeholder="Enter input" icon="email" />
    </Screen>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
})
