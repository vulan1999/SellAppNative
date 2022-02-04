import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import ImageViewScreen from './app/screens/ImageViewScreen'
import ListEditScreen from './app/screens/ListEditScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import MyAccountScreen from './app/screens/MyAccountScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import SearchScreen from './app/screens/SearchScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import { useEffect, useState } from 'react'
import Screen from './app/components/Screen'
import ImageInputList from './app/components/ImageInputList'
import { Image } from './app/config/types'

export default function App() {
  const [images, setImages] = useState<Image[]>([])

  const handleAdd = (uri: string) => {
    const new_image: Image = {
      id: Math.floor(Math.random() * 10000),
      uri: uri,
    }
    setImages(images.concat(new_image))
  }

  const handelRemove = (uri: string) => {
    setImages(images.filter(image => image.uri !== uri))
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <ImageViewScreen /> */}

      {/* <WelcomeScreen /> */}

      {/* <ListingsScreen /> */}

      {/* <ListingDetailsScreen imageSource={require("./assets/images/jacket.jpg")} title='Red Jacket on sale!' subTitle='$100' /> */}

      {/* <MessagesScreen /> */}

      {/* <MyAccountScreen /> */}

      {/* <SearchScreen /> */}

      {/* <LoginScreen /> */}

      {/* <RegisterScreen /> */}

      {/* <ListEditScreen /> */}

      <Screen>
        <ImageInputList
          images={images}
          onAdd={handleAdd}
          onRemove={handelRemove}
        />
      </Screen>
    </GestureHandlerRootView>
  )
}
