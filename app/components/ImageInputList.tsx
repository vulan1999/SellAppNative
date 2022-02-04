import { StyleSheet, View } from 'react-native'
import React from 'react'
import ImageInput from './ImageInput'

interface Props {
  imageUris: string[]
  onRemove: (imageUri: string) => any
  onAdd: (imageUri: string) => any
}

const ImageInputList = ({ imageUris, onRemove, onAdd }: Props) => {
  return (
    <View style={styles.container}>
      {imageUris.map(imageUri => (
        <View style={styles.image} key={imageUri}>
          <ImageInput imageUri={imageUri} onChange={() => onRemove(imageUri)} />
        </View>
      ))}

      <ImageInput onChange={(uri: string) => onAdd(uri)} />
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
})
