
import { View } from 'react-native';
import Card from './app/components/Card';
import ImageViewScreen from './app/screens/ImageViewScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
      // <ImageViewScreen />

      // <WelcomeScreen />

      // <View style={{backgroundColor: '#f8f4f4', paddingHorizontal: 20, padding: 100, }}>
      //   <Card title='Read jacket for sale!' subTitle='$100' imageSource={require("./assets/images/jacket.jpg")} />
      //   <Card title='Couch for sale!' subTitle='$200' imageSource={require('./assets/images/couch.jpg')} />
      // </View>
      
      // <ListingDetailsScreen imageSource={require("./assets/images/jacket.jpg")} title='Red Jacket on sale!' subTitle='$100' />

      <MessagesScreen />
  );
}

