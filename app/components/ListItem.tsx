import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';

interface Props{
  imageSource: any,
  userName: string,
  description: string,
}

const ListItem = ({...props}: Props) => {
  return (
    <View style={styles.listingContainer}>
      <Image source={props.imageSource} style={styles.userImage}/>
      <View>
        <Text style={styles.userName}>{props.userName}</Text>
        <Text style={styles.listingNumber}>{props.description}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listingContainer:{
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',

  },
  userImage: {
    width: 70,
    height:70,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
  },
  listingNumber:{
    color: '#777'
  }
});
