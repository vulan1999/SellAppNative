import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

interface Props{
  title: string;
  subTitle: string;
  imageSource: any;
}

const Card = ({title, subTitle, imageSource}: Props) => {
  
  return (
      <View style={styles.cardContainer}>
        <Image source={imageSource} style={styles.image}></Image>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image:{
    width: '100%',
    height: 200,
  }, 
  titleContainer:{
    padding: 20,
  },
  title: {
    fontSize:18,
    marginBottom: 10,
  },
  subTitle:{
    fontSize:18,
    color: colors.secondary,
    fontWeight: 'bold'
  }
});
