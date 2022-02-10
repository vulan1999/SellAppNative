import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

interface FormProps {
  children: React.ReactNode
  initialValues: any
  onSubmit: any
  validationSchema: any
}

const AppForm = ({ ...props }: FormProps) => {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
    >
      {() => props.children}
    </Formik>
  )
}

export default AppForm
