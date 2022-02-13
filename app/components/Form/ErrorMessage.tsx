import { StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../AppText'

interface ErrorProps {
  error: any
  visible: any
}

const ErrorMessage = ({ error, visible = false }: ErrorProps) => {
  if (!visible && !error) {
    return null
  }

  return <AppText style={styles.errorMessage}>{error}</AppText>
}

export default ErrorMessage

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
})
