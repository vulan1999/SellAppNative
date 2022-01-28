import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Formik } from 'formik'
import AppInput from '../components/AppInput'
import * as Yup from 'yup'
import ErrorMessage from '../components/Form/ErrorMessage'
import SubmitButton from '../components/Form/SubmitButton'

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

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, touched, setFieldTouched }) => (
          <>
            <AppInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              textContentType="emailAddress"
            />

            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppInput
              placeholder="Password"
              icon="lock"
              autoCorrect={false}
              autoCapitalize="none"
              textContentType="password"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              secureTextEntry
            />

            <ErrorMessage error={errors.password} visible={touched.password} />

            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
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
