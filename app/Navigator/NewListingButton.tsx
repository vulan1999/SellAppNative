import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import colors from '../config/colors'

const NewListingButton = ({ onPress }: any) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 25,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
