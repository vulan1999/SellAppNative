import { SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

interface Props{
  children: React.ReactNode,
  style?: {}
}

const Screen = ({children, style} : Props) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
});
