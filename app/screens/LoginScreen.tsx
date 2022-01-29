import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import { SubmitButton, FormField, AppForm } from '../components/Form'

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  })
  return (
    <Screen style={styles.screen}>
      <Image
        source={require('../../assets/images/logo-red.png')}
        style={styles.logo}
      />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={() => console.log('Submitted')}
        validationSchema={validationSchema}
      >
        <>
          <FormField
            fieldName="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <FormField
            fieldName="password"
            placeholder="Password"
            icon="lock"
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
          />

          <SubmitButton title="Login" />
        </>
      </AppForm>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})
