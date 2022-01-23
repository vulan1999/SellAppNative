import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

interface Props{
  children: ReactNode
}

const AppText = ({children}:Props) => {
  return (
  
      <Text style={styles.appText}>{children}</Text>
   );
};

export default AppText;

const styles = StyleSheet.create({
  appText:{
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
});
