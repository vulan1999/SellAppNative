import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ImageViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" size={35} color="white" />
      </View>

      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/chair.jpg')}
        resizeMode="contain"
      ></Image>
    </View>
  )
}

export default ImageViewScreen

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
})
