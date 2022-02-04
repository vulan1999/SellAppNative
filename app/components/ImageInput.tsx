import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import * as ImagePicker from 'expo-image-picker'

interface Props {
  imageUri?: any
  onChange: (uri: any) => any
}

const ImageInput = ({ imageUri, onChange }: Props) => {
  useEffect(() => {
    requestUserPermission()
  }, [])

  const requestUserPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert('You need to enable permission to access this library')
  }

  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image', [
        { text: 'Yes', onPress: () => onChange(null) },
        { text: 'No' },
      ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) onChange(result.uri)
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            name="camera"
            color={colors.mediumGray}
            size={40}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
