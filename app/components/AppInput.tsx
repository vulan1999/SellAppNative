import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

type InputProps = {
  icon: any
  placeholder: string
} & TextInputProps

const AppInput = ({ icon, placeholder, ...otherProps }: InputProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.mediumGray}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...otherProps}
      />
    </View>
  )
}

export default AppInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    color: colors.darkGrey,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
})
