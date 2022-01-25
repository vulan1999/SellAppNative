import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props{
  onPress: () => void;
}

const ListItemDelete = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.deleteActionContainer}>
        <MaterialCommunityIcons name='trash-can' color='white' size={35} />
      </View> 
    </TouchableOpacity>
  );
};

export default ListItemDelete;

const styles = StyleSheet.create({
  deleteActionContainer:{
    width: 70,
    height: '100%',
    backgroundColor: colors.danger,
    justifyContent:'center',
    alignItems: 'center'
  }
});
