import * as actionTypes from './actionTypes/searchMovie';

import {searchMovie} from '../../apiServices/movies/movies';

export function searchMovieRequest(payload) {
  console.log(payload)
  return {
    type: actionTypes.SEARCH_MOVIE,
    payload: searchMovie(payload),
  };
}
