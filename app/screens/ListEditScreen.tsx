import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
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
import { Listing } from '../config/types'
import listingsAPI from '../api/listings'
import UploadScreen from './UploadScreen'

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
      label: 'Cars',
      value: 2,
    },
    {
      label: 'Cameras',
      value: 3,
    },
    {
      label: 'Games',
      value: 4,
    },
    {
      label: 'Clothing',
      value: 5,
    },
    {
      label: 'Sports',
      value: 6,
    },
    {
      label: 'Movies & Music',
      value: 7,
    },
    {
      label: 'Books',
      value: 8,
    },
    {
      label: 'Other',
      value: 9,
    },
  ]

  const [uploadVisible, setUploadVisible] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleSubmit = async (listing: Listing, { resetForm }: any) => {
    setUploadVisible(true)
    const result = await listingsAPI.addListing(listing, (progress: any) =>
      setUploadProgress(progress)
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert('Could not save the listing')
    }

    resetForm()
  }

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={uploadProgress}
        visible={uploadVisible}
      />

      <AppForm
        initialValues={{
          title: '',
          price: 0,
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
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
