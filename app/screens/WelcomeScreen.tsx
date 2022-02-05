import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Button from '../components/Button'
import routes from '../config/routes'

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-red.png')}
        ></Image>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          onPress={() => navigation.navigate(routes.LOGIN)}
        >
          Login
        </Button>
        <Button
          color={colors.secondary}
          onPress={() => navigation.navigate(routes.REGISTER)}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
})
