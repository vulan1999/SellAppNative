import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/List/ListItem'

const ListingDetailsScreen = ({ route }: any) => {
  const { item } = route.params

  return (
    <View>
      <Image source={item.image} style={styles.image}></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>{item.price}</AppText>
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
