import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card';
import ImageViewScreen from './app/screens/ImageViewScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
      // <ImageViewScreen />
      // <WelcomeScreen />
      <View style={{backgroundColor: '#f8f4f4', paddingHorizontal: 20, paddingVertical: 100}}>
        <Card title='Read jacket for sale!' subTitle='$100' imageSource={require("./assets/images/jacket.jpg")} />
      </View>
  );
}

