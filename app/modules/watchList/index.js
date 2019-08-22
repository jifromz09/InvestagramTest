import {createStackNavigator} from 'react-navigation';
import Watchlist from './watchList';

const FeedStack = createStackNavigator(
  {
    Watchlist,
  }
);

export default FeedStack;
