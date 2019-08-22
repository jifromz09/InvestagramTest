import * as actionTypes from '../../actions/movies/actionTypes/movieDetails';
import {chunk} from 'lodash';
const initialState = {
  movieDetails: {},
  isFetching: true,
};

export default (movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        movieDetails: action.payload,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      break;
  }
  return state;
});
