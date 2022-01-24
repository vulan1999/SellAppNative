import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
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
  return (
    <Screen>

    <FlatList data={messages} 
    keyExtractor={messages => messages.id.toString()} 
    renderItem={({item}) => <ListItem userName={item.title} description={item.description} imageSource={item.image} />}  />
  </Screen>);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
