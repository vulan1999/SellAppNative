import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';


interface Props{
  children: ReactNode;
  color: string;
}

const Button = ({children, color}: Props) => {
  return (
    <TouchableOpacity
    style={[styles.buttonContainer, {backgroundColor: color}]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 15,
    marginVertical: 20
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
