import { View, Text } from 'react-native'
import React from 'react'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'
import { Category } from '../../screens/SearchScreen'
import { useFormikContext } from 'formik'

type FormPickerProps = {
  name: string
  items: Category[]
  placeholder: string
}

const FormPicker = ({ name, items, placeholder }: FormPickerProps) => {
  const { errors, setFieldValue, values, touched } =
    useFormikContext<FormPickerProps>()

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormPicker
