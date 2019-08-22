import {createStackNavigator} from 'react-navigation';
import {Animated, Easing} from 'react-native';
import Home from './movieList';
import MovieDetails from './movieDetails';
import MovieReviews from './reviews';
import AddToWatchListModalScreen from './components/addToWatchListModal';
import DeleteMovieRating from './components/deleteRatingModal';
import SearchMovieModalScreen from './components/searchMovieModal';
import SearchResultList from './components/searchResultList';
import AddMovieRatingModal from './components/addRatingModal';

const config = {
  mode: 'modal',
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  transparentCard: true,
  transitionConfig: ({scene}) => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
    screenInterpolator: screenProps => {
      return {};
    },
  }),
};

const FeedStack = createStackNavigator(
  {
    Home,
    MovieDetails,
    MovieReviews,
    SearchResultList,
    AddMovieRatingModal,
    AddMovieRatingModal: {
      screen: AddMovieRatingModal,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SearchMovieModalScreen: {
      screen: SearchMovieModalScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddToWatchListModalScreen: {
      screen: AddToWatchListModalScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DeleteMovieRating: {
      screen: DeleteMovieRating,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DeleteMovieRating: {
      screen: DeleteMovieRating,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  config,
);

export default FeedStack;
