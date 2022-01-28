import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/List/ListItem'
import Screen from '../components/Screen'
import Divider from '../components/Divider'
import ListItemDelete from '../components/List/ListItemDelete'

export type Message = {
  id: number
  title: string
  description: string
  image: any
}

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
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
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})
