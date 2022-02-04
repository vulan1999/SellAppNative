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

export default function App() {
  const [imageUris, setImageUris] = useState<any[]>([
    'https://lh3.googleusercontent.com/pyuUr-SN0ZBLisV-Dug3eAgOG9eU_hOOIlsNNxWqYqpkncT4lGDydo78HeeNrcMGGPUT-BDlkXtN_Uwrn4xihNlQI_y7c9U2yMWPO1w2nnmFzTHk2Z8Z67A7kbplEgwQanlEkKTQGrk3dFMi7THvx-C9sC_DOSXznFaOFtKW59HMWQu5nRnlAm5WGYnuZLveIo0UBrPFsNuyQ4_5jp4JwJYlMXKaa0cS2uEkV2mfYc647zxFUM9bhPGuFETTczKqnZ-jMKEDrwu2jKjBHtRXBv_vAEypAJTejoq9tHQ19Ck6Jn-N0P4SHVXkm9v4nvLHDQZaaOxqU1uKqtSDqhxsPCfDDwW3uOlUAXyZO3_m27spziTpVAqXYBGetGikfdVWrAULAhI_laSg1YaVZU5BVhDP1-toYmMEnH5RvaW7Vo0gvq8v9OqevJVkbm_khLfBRm-_a0fmdund22zqI0rGvhWtu_c_oJZXWq-7Ra9UA7GA4WcfKjwVu6kjNoXreMKBEtLAMG5YxvYZkgMG_Alx1VITnNUGIZWlZYHPZ2nkVzGh6Be1ISvMVxDUDiyffGgdBiYu82HkxsoW_9LJvlmqE4mYbWylPeShNDRorA9oxRCiWFRIv8r8WUsFNZpaPXA08Vs6qobLtHT8UazhzCbLtqBl7XMKTGiuvID6zNdzNJQYnQoDsti-nQctZR_zTX77ooUZ2DYfFOiCDCRyoKqRkt2tSg=w1391-h927-no?authuser=0',
  ])

  const handleAdd = (uri: string) => {
    setImageUris(imageUris.concat(uri))
  }

  const handelRemove = (uri: string) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
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
          imageUris={imageUris}
          onAdd={handleAdd}
          onRemove={handelRemove}
        />
      </Screen>
    </GestureHandlerRootView>
  )
}
