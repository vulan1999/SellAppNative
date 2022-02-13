import React from 'react'
import { useFormikContext } from 'formik'
import AppInput, { InputProps } from '../AppInput'
import ErrorMessage from './ErrorMessage'

type Field = {
  fieldName: string
} & InputProps

const FormField = ({ fieldName, ...otherProps }: Field) => {
  const {
    setFieldValue,
    touched,
    setFieldTouched,
    errors,
    values,
    handleChange,
  } = useFormikContext<any>()

  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(fieldName)}
        // onChangeText={text => setFieldValue(fieldName, text)}
        onChangeText={handleChange(fieldName)}
        // value={values[fieldName]}
        {...otherProps}
      />

      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  )
}

export default FormField
