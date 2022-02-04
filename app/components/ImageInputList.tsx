import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'
import { Image } from '../config/types'

interface Props {
  imageUris: string[]
  onRemove: (imageUri: any) => any
  onAdd: (imageUri: any) => any
}

const ImageInputList = ({ imageUris = [], onRemove, onAdd }: Props) => {
  const scrollView = useRef<any>()

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map(imageUri => (
            <View style={styles.image} key={imageUri}>
              <ImageInput
                imageUri={imageUri}
                onChange={() => onRemove(imageUri)}
              />
            </View>
          ))}

          <ImageInput onChange={(uri: any) => onAdd(uri)} />
        </View>
      </ScrollView>
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
