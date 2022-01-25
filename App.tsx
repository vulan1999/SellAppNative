
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import ImageViewScreen from './app/screens/ImageViewScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import SearchScreen from './app/screens/SearchScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      {/* <ImageViewScreen /> */}

      {/* <WelcomeScreen /> */}

      {/* <ListingsScreen /> */}
      
      {/* <ListingDetailsScreen imageSource={require("./assets/images/jacket.jpg")} title='Red Jacket on sale!' subTitle='$100' /> */}
     
      {/* <MessagesScreen /> */}

      {/* <MyAccountScreen /> */}

      <SearchScreen />
    </GestureHandlerRootView>
  );
}

