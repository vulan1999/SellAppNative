import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

interface Props{
  title: string;
  subTitle: string;

}

const Card = ({title, subTitle}: Props) => {
  
  return (
      <View style={styles.cardContainer}>
        
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
  },
  image:{
    width: '100%',
    height: 100,

  },
  title: {

  },
  subTitle:{

  }
});
