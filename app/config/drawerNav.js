import React from 'react';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import Movies from '../modules/movies';
import Watchlist from '../modules/watchList';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainScreen = createDrawerNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: {
        drawerLabel: 'Trending Movies',
        drawerIcon: ({tintColor}) => <Icon name="tv" size={17} />,
      },
    },
    Watchlist: {
      screen: Watchlist,
      navigationOptions: {
        drawerLabel: 'My Watchlist',
        drawerIcon: ({tintColor}) => <Icon name="user-cog" size={17} />,
      },
    },
  },
  {
    initialRouteName: 'Movies',
    backBehavior: 'initialRoute',
  },
);

export default createAppContainer(MainScreen);
