import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../config/routes'

import { getDocs } from 'firebase/firestore'
import { listingsColRef } from '../firebase/firebase'

const ListingsScreen = ({ navigation }: any) => {
  const [list, setList] = useState<any>([])

  useEffect(() => {
    async function getListings() {
      let listings: any[] = []
      await getDocs(listingsColRef)
        .then(snapshot => {
          snapshot.docs.forEach(doc =>
            listings.push({ ...doc.data(), id: doc.id })
          )
          setList(listings)
        })
        .catch(err => console.log(err))
    }
    getListings()
  }, [])

  return (
    <Screen style={styles.listContainer}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageSource={item.image.uri}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAIL, { item: item })
            }
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
