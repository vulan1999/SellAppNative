import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../config/routes'
import AppText from '../components/AppText'
import Button from '../components/Button'
import ActivityIndicator from '../components/ActivityIndicator'
import useGetListings from '../hooks/useGetListings'

const ListingsScreen = ({ navigation }: any) => {
  const {
    request: loadListings,
    data: listings,
    error,
    loading,
  } = useGetListings()

  useEffect(() => {
    loadListings()
  }, [])
  return (
    <Screen style={styles.listContainer}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button color={colors.primary} onPress={() => loadListings()}>
            Retry
          </Button>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageSource={item.images[0].url}
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
