import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../config/routes'

import AppText from '../components/AppText'
import Button from '../components/Button'
import Loading from '../components/Loading'
import useGetListing from '../hooks/useGetListing'

const ListingsScreen = ({ navigation }: any) => {
  const { request: getListings, error, loading, data } = useGetListing()

  useEffect(() => {
    getListings()
  }, [])

  return (
    <Screen style={styles.listContainer}>
      {error && (
        <>
          <AppText>Couldn't retrieve data from server</AppText>
          <Button color={colors.primary} onPress={() => getListings()}>
            Retry
          </Button>
        </>
      )}

      {loading && <Loading visible={loading} />}
      <FlatList
        data={data}
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
