import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const ListItemDelete = () => {
  return (
    <View style={styles.deleteActionContainer}>
      <MaterialCommunityIcons name='trash-can' color='white' size={35} />
    </View> 
  );
};

export default ListItemDelete;

const styles = StyleSheet.create({
  deleteActionContainer:{
    width: 70,
    backgroundColor: colors.danger,
    justifyContent:'center',
    alignItems: 'center'
  }
});
