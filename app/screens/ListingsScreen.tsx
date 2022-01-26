import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingsScreen = () => {
  const listItems = [
    {
      id: 1,
      image: require('../../assets/images/jacket.jpg'),
      title: 'Red Jacket for sale!',
      description: '$100',
    },
    {
      id: 2,
      image: require('../../assets/images/couch.jpg'),
      title: 'Couch for sale!',
      description: '$1000',
    },
  ]

  return (
    <Screen style={styles.listContainer}>
      <FlatList
        data={listItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            imageSource={item.image}
          />
        )}
      />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
})
