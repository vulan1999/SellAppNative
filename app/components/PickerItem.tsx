import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'

interface Props {
  label: string
  onPress: any
}

const PickerItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.pickerItem}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  pickerItem: {
    padding: 15,
  },
})
