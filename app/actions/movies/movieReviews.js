import * as actionTypes from './actionTypes/movieReviews';

import {getMovieReviews} from '../../apiServices/movies/movies';

export function fetchMovieReviews(payload) {
  return {
    type: actionTypes.FETCH_MOVIE_REVIEWS,
    payload: getMovieReviews(payload),
  };
}
