import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const ImageViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image style={styles.imageContainer} source={require("../../assets/images/chair.jpg")} resizeMode='contain'></Image>
    </View>
  );
};

export default ImageViewScreen;

const styles = StyleSheet.create({
  imageContainer:{
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,

  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
    left: 30,
  },
  deleteIcon:{
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 0,
    right: 30,
  }
});
