import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import {
  AppForm,
  FormField,
  SubmitButton,
  FormPicker,
} from '../components/Form'
import { Category } from './SearchScreen'
import FormImagePicker from '../components/Form/FormImagePicker'

const ListEditScreen = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1, 'Please select at least one image.'),
  })

  const Categories: Category[] = [
    {
      label: 'Furniture',
      value: 1,
    },
    {
      label: 'Clothing',
      value: 2,
    },
    {
      label: 'Gaming Gear',
      value: 3,
    },
  ]

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: 0,
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={() => console.log('submitted')}
        validationSchema={validationSchema}
      >
        <>
          <FormImagePicker name="images" />

          <FormField
            fieldName="title"
            placeholder="Title"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormField
            fieldName="price"
            placeholder="Price"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
          />
          <FormPicker
            name="category"
            placeholder="Category"
            items={Categories}
          />
          <FormField
            fieldName="description"
            placeholder="Description"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <SubmitButton title="Post" />
        </>
      </AppForm>
    </Screen>
  )
}

export default ListEditScreen

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
})
