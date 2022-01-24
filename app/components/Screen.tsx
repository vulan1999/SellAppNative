import { SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

interface Props{
  children: React.ReactNode,
}

const Screen = ({children} : Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
  }
});
