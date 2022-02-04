import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'
import { Image } from '../config/types'

interface Props {
  images: Image[]
  onRemove: (imageUri: any) => any
  onAdd: (imageUri: any) => any
}

const ImageInputList = ({ images = [], onRemove, onAdd }: Props) => {
  const scrollView = useRef<any>()

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {images.map(image => (
            <View style={styles.image} key={image.id}>
              <ImageInput
                imageUri={image.uri}
                onChange={() => onRemove(image.uri)}
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
