import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import { SubmitButton, FormField, AppForm } from '../components/Form'

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    name: Yup.string().required().label('Name'),
  })

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={() => console.log()}
        validationSchema={validationSchema}
      >
        <>
          <FormField
            fieldName="name"
            icon="account"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
          />

          <FormField
            fieldName="email"
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <FormField
            fieldName="password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Register" />
        </>
      </AppForm>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 80,
  },
})
