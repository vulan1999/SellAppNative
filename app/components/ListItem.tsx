import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import ListItemDelete from './ListItemDelete';
interface Props{
  imageSource: any;
  userName: string;
  description: string;
  onPress: any;

}
const ListItem = ({ ...props}: Props) => {
  return (
   <Swipeable renderRightActions={() => <ListItemDelete />} onSwipeableRightOpen={() => console.log('Right')}>
      <TouchableHighlight onPress={props.onPress} underlayColor={colors.lightGray}>
        <View style={styles.listingContainer}>
          <Image source={props.imageSource} style={styles.userImage}/>
          <View>
            <Text style={styles.userName}>{props.userName}</Text>
            <Text style={styles.description}>{props.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listingContainer:{
    flexDirection: 'row',
    padding: 15,
  },
  userImage: {
    width: 70,
    height:70,
    borderRadius: 35,
    marginRight: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
  },
  description:{
    color: '#777'
  }
});
