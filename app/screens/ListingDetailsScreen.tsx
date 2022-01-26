import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

interface Props {
  imageSource: any
  title: string
  subTitle: string
}

const ListingDetailsScreen = ({ imageSource, title, subTitle }: Props) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image}></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>

      <ListItem
        imageSource={require('../../assets/images/mosh.jpg')}
        title="Mosh Hamedani"
        subTitle="5 Listings"
        onPress={() => console.log('Pressed')}
      />
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
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
