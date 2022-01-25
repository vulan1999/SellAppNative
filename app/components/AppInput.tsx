import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

interface Props{
  icon?: any;
  placeholder: string;
}

const AppInput = ({...props}: Props) => {
  return (
    <View style={styles.container}>
      {props.icon && <MaterialCommunityIcons name={props.icon} color={colors.mediumGray} size={20} style={styles.icon} />}
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  icon:{
    marginRight: 10
  },
  input:{
    fontSize: 18,
    color: colors.darkGrey,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
});
