import {combineReducers} from 'redux';

import trendingMovies from './movies/getTrendingMovies';
import addRating from './movies/postMovieRating';
import deleteMovieRating from './movies/deleteMovieRating';
import requestToken from './requestToken/requestToken';
import userAuth from './login/userLogin';
import movieDetails from './movies/getMovieDetails';
import movieReviews from './movies/getMovieReviews';
import createSessionId from './createSession/createSessionIdRequest';
import addToWatchlist from './addToWatchlist/addToWatchlist';
import watchlist from './getWatchlist/getWatchlist';
import movieSearch from './movies/searchMovie';

const appReducer = combineReducers({
    movieReviews,
    trendingMovies,
    requestToken,
    userAuth,
    movieDetails,
    addRating,
    deleteMovieRating,
    createSessionId,
    addToWatchlist,
    watchlist,
    movieSearch
});

export default appReducer;
