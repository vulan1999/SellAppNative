import { StyleSheet } from 'react-native'
import React from 'react'
import Button from '../Button'
import colors from '../../config/colors'
import { useFormikContext } from 'formik'

interface Props {
  title: string
}

const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext()

  return (
    <Button color={colors.primary} onPress={handleSubmit}>
      {title}
    </Button>
  )
}

export default SubmitButton

const styles = StyleSheet.create({})
