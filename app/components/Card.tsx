import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

interface Props {
  title: string
  subTitle: string
  imageSource: any
  onPress: any
}

const Card = ({ title, subTitle, imageSource, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={imageSource} style={styles.image}></Image>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
})
