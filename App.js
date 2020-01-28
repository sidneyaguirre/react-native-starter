import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import myComponent from './src/screens/myComponent';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: myComponent,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
