import React from 'react';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import Movies from '../modules/movies';
import Watchlist from '../modules/watchList';
import DrawerComponentMenu from './drawerComponent';

const MainScreen = createDrawerNavigator(
  {
    Movies,
    Watchlist,
  },
  {
    contentComponent: DrawerComponentMenu,
    initialRouteName: 'Movies',
  },
);

export default createAppContainer(MainScreen);
