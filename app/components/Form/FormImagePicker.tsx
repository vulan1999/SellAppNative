import { View, Text } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

const FormImagePicker = ({ name }: any) => {
  const { errors, touched, setFieldValue, values } = useFormikContext<any>()
  const imageUris = values[name]

  const handleAdd = (uri: string) => {
    setFieldValue(name, imageUris.concat(uri))
  }

  const handelRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: any) => imageUri !== uri)
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAdd={handleAdd}
        onRemove={handelRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker
