import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/List/ListItem'
import Screen from '../components/Screen'
import Divider from '../components/Divider'
import ListItemDelete from '../components/List/ListItemDelete'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export type Message = {
  id: number
  title: string
  description: string
  image: any
}

const initialMessages = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et quia facilis officiis voluptatem numquam odit laborum iste provident perspiciatis?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, assumenda. Perferendis repellat, ipsa consequuntur officia quo et voluptate cupiditate laudantium tenetur placeat consequatur delectus, odit iusto saepe, eaque quasi rem ipsam non provident. Sit officia facere labore totam debitis provident atque ipsam, ad id ipsa odit illum, hic harum temporibus?',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/images/mosh.jpg'),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message: Message) => {
    const new_messages = messages.filter(m => m.id !== message.id)
    setMessages(new_messages)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={messages => messages.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              imageSource={item.image}
              renderRightAction={() => (
                <ListItemDelete onPress={() => handleDelete(item)} />
              )}
              onPress={() => console.log()}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
          refreshing={refreshing}
          onRefresh={() => setMessages(initialMessages)}
        />
      </Screen>
    </GestureHandlerRootView>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})
