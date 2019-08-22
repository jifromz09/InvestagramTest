import {createStackNavigator} from 'react-navigation';
import {Animated, Easing} from 'react-native';
import Home from './watchList';

const FeedStack = createStackNavigator(
  {
    Home,
  }
);

export default FeedStack;
