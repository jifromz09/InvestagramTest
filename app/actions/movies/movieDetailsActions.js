import * as actionTypes from './actionTypes/movieDetails';

import {getMovieDetails} from '../../apiServices/movies/movies';

export function fetchMovieDetails(payload) {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS,
    payload: getMovieDetails(payload),
  };
}
