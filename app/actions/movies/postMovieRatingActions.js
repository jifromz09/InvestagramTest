import * as actionTypes from './actionTypes/postMovieRating';

import {postMovieRating} from '../../apiServices/movies/movies';

export function rateMovie(payload) {
  console.log('action')
  return {
    type: actionTypes.POST_MOVIE_RATING,
    payload: postMovieRating(payload),
  };
}
