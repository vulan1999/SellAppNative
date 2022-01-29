import React from 'react'
import { useFormikContext } from 'formik'
import AppInput, { InputProps } from '../AppInput'
import ErrorMessage from './ErrorMessage'

type Field = {
  fieldName: string
} & InputProps

const FormField = ({ fieldName, ...otherProps }: Field) => {
  const { handleChange, touched, setFieldTouched, errors } =
    useFormikContext<Field>()

  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        {...otherProps}
      />

      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  )
}

export default FormField
