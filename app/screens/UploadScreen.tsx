import { Modal, StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

interface Props {
  progress: number
  visible: boolean
  onDone: any
}

const UploadScreen = ({ progress = 0, visible = false, onDone }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <LottieView
            source={require('../../assets/animation/uploading.json')}
            style={{ width: 150 }}
            autoPlay
            loop
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../../assets/animation/done.json')}
            style={{ width: 150 }}
          />
        )}
      </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
