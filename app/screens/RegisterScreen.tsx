import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Formik } from 'formik'
import AppInput from '../components/AppInput'
import * as Yup from 'yup'
import ErrorMessage from '../components/Form/ErrorMessage'
import Button from '../components/Button'
import colors from '../config/colors'
import SubmitButton from '../components/Form/SubmitButton'

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    name: Yup.string().required().label('Name'),
  })

  return (
    <Screen style={styles.screen}>
      {/* <Image
        source={require('../../assets/images/logo-red.png')}
        style={styles.logo}
      /> */}

      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, touched, setFieldTouched }) => (
          <>
            <AppInput
              icon="account"
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched('name')}
              onChangeText={handleChange('name')}
              textContentType="name"
            />

            <ErrorMessage error={errors.name} visible={touched.name} />

            <AppInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              textContentType="emailAddress"
            />

            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              secureTextEntry
              textContentType="password"
            />

            <ErrorMessage error={errors.password} visible={touched.password} />

            <SubmitButton title="Register" />
          </>
        )}
      </Formik>
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
