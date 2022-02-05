import { StyleSheet, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { FlatList } from 'react-native-gesture-handler'
import ListItem from '../components/List/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import routes from '../config/routes'

const MyAccountScreen = ({ navigation }: any) => {
  const items = [
    {
      title: 'My Listings',
      icon: 'format-list-bulleted',
      backgroundColor: colors.primary,
      pressEvent: () => console.log('pressed'),
    },
    {
      title: 'My Message',
      icon: 'email',
      backgroundColor: colors.secondary,
      pressEvent: () => navigation.navigate(routes.MESSAGES),
    },
  ]

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          imageSource={require('../../assets/images/mosh.jpg')}
          onPress={() => console.log('pressed')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              icon={
                <Icon
                  name={item.icon}
                  iconSize={30}
                  backgroundColor={item.backgroundColor}
                />
              }
              onPress={item.pressEvent}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log out"
          icon={
            <Icon
              name="logout"
              backgroundColor="#ffe66d"
              iconColor={colors.white}
              iconSize={30}
            />
          }
          onPress={() => console.log('pressed')}
        />
      </View>
    </Screen>
  )
}

export default MyAccountScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },

  container: {
    marginVertical: 10,
  },
})
