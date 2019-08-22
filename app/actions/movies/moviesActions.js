import * as actionTypes from './actionTypes/trendingMovies';

import {getTrendingMovies} from '../../apiServices/movies/movies';

export function fetchTrendingMovies(payload) {
  return {
    type: actionTypes.FETCH_TRENDING_MOVIES,
    payload: getTrendingMovies(payload),
  };
}
