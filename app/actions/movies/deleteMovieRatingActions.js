import * as actionTypes from './actionTypes/deleteMovieRating';

import {removeMovieRating} from '../../apiServices/movies/movies';

export function deleteMovieRating(payload) {
  return {
    type: actionTypes.DELETE_MOVIE_RATING,
    payload: removeMovieRating(payload),
  };
}
